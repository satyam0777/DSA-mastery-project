// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// // Create an axios instance with base configuration
// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Add a request interceptor to automatically add the token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor to handle errors globally
// api.interceptors.response.use(
//   (response) => {
//     // Check for new token in response headers
//     const newToken = response.headers['x-new-token'];
//     if (newToken) {
//       // Update token in localStorage and axios headers
//       setToken(newToken);
//     }
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // If error is 401 and there's no _retry flag
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       // Check specific error code
//       const errorCode = error.response.data.code;

//       if (errorCode === 'TOKEN_EXPIRED') {
//         originalRequest._retry = true;
//         try {
//           // Try to reauthenticate using current token
//           const response = await api.post('/auth/refresh', {
//             token: getToken()
//           });
          
//           // If successful, update token and retry original request
//           const { token } = response.data;
//           setToken(token);
//           return api(originalRequest);
//         } catch (refreshError) {
//           // If refresh fails, logout user
//           localStorage.removeItem('token');
//           window.location.reload();
//           return Promise.reject(refreshError);
//         }
//       } else {
//         // For other auth errors, clear token and reload
//         localStorage.removeItem('token');
//         window.location.reload();
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export function setToken(token) {
//   if (token) {
//     localStorage.setItem('token', token);
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     localStorage.removeItem('token');
//     delete api.defaults.headers.common['Authorization'];
//   }
// }



// export function getToken() {
//   return localStorage.getItem('token');
// }

// export async function login(email, password) {
//   try {
//     const res = await api.post('/auth/login', { email, password });
//     setToken(res.data.token);
//     return res.data;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error;
//   }
// }

// export async function register(name, email, password) {
//   try {
//     const res = await api.post('/auth/register', { name, email, password });
//     return res.data;
//   } catch (error) {
//     console.error('Registration error:', error);
//     throw error;
//   }
// }

// export async function fetchMindmap() {
//   try {
//     const res = await api.get('/mindmap');
//     return res.data.mindmap;
//   } catch (error) {
//     console.error('Failed to fetch mindmap:', error);
//     throw error;
//   }
// }

// export async function fetchPatterns() {
//   try {
//     const res = await api.get('/pattern');
//     return res.data;
//   } catch (error) {
//     console.error('Failed to fetch patterns:', error);
//     throw error;
//   }
// }

// export async function fetchProblems() {
//   try {
//     const res = await api.get('/mindmap/problems');
//     return res.data;
//   } catch (error) {
//     console.error('Failed to fetch problems:', error);
//     throw error;
//   }
// }

// export async function fetchStats() {
//   try {
//     const res = await api.get('/stats');
//     return res.data;
//   } catch (error) {
//     console.error('Failed to fetch stats:', error);
//     throw error;
//   }
// }

// export async function fetchUserProfile() {
//   try {
//     const res = await api.get('/user/profile');
//     return res.data;
//   } catch (error) {
//     console.error('Failed to fetch user profile:', error);
//     throw error;
//   }
// }

// export async function updateUserProfile(data) {
//   try {
//     const res = await api.put('/user/profile', data);
//     return res.data;
//   } catch (error) {
//     console.error('Failed to update user profile:', error);
//     throw error;
//   }
// }

// export async function fetchProgress() {
//   try {
//     const res = await api.get('/progress');
//     return res.data.completedProblems;
//   } catch (error) {
//     console.error('Failed to fetch progress:', error);
//     throw error;
//   }
// }

// export async function updateProgress(completedProblems) {
//   try {
//     const res = await api.put('/progress', { completedProblems });
//     return res.data.completedProblems;
//   } catch (error) {
//     console.error('Failed to update progress:', error);
//     throw error;
//   }
// }

import axios from 'axios';


// 🔹 Use env variable instead of hardcoding
// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// // Create an axios instance with base configuration
// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// 🔹 Use env variable for backend URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create an axios instance with base configuration
const api = axios.create({
baseURL: API_URL,
headers: {
'Content-Type': 'application/json',
},
});

// Add a request interceptor to automatically add the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => {
    // Check for new token in response headers
    const newToken = response.headers['x-new-token'];
    if (newToken) {
      setToken(newToken);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      const errorCode = error.response.data.code;

      if (errorCode === 'TOKEN_EXPIRED') {
        originalRequest._retry = true;
        try {
          const response = await api.post('/auth/refresh', {
            token: getToken(),
          });

          const { token } = response.data;
          setToken(token);
          return api(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('token');
          window.location.reload();
          return Promise.reject(refreshError);
        }
      } else {
        localStorage.removeItem('token');
        window.location.reload();
      }
    }
    return Promise.reject(error);
  }
);

export function setToken(token) {
  if (token) {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
  }
}

export function getToken() {
  return localStorage.getItem('token');
}

export async function login(email, password) {
  const res = await api.post('/auth/login', { email, password });
  setToken(res.data.token);
  return res.data;
}

export async function register(name, email, password) {
  const res = await api.post('/auth/register', { name, email, password });
  return res.data;
}

export async function fetchMindmap() {
  const res = await api.get('/mindmap');
  return res.data.mindmap;
}

export async function fetchPatterns() {
  const res = await api.get('/pattern');
  return res.data;
}

export async function fetchProblems() {
  const res = await api.get('/mindmap/problems');
  return res.data;
}

export async function fetchStats() {
  const res = await api.get('/stats');
  return res.data;
}

export async function fetchUserProfile() {
  const res = await api.get('/user/profile');
  return res.data;
}

export async function updateUserProfile(data) {
  const res = await api.put('/user/profile', data);
  return res.data;
}

export async function fetchProgress() {
  const res = await api.get('/progress');
  return res.data.completedProblems;
}

export async function updateProgress(completedProblems) {
  const res = await api.put('/progress', { completedProblems });
  return res.data.completedProblems;
}
