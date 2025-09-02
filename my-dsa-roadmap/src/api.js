import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export function setToken(token) {
  localStorage.setItem('token', token);
}

export function getToken() {
  return localStorage.getItem('token');
}

export async function login(email, password) {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  setToken(res.data.token);
  return res.data;
}

export async function register(name, email, password) {
  const res = await axios.post(`${API_URL}/auth/register`, { name, email, password });
  return res.data;
}

export async function fetchMindmap() {
  const token = getToken();
  const res = await axios.get(`${API_URL}/mindmap`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data.mindmap;
}

export async function fetchPatterns() {
  const token = getToken();
  const res = await axios.get(`${API_URL}/pattern`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
}

export async function fetchProblems() {
  const token = getToken();
  const res = await axios.get(`${API_URL}/mindmap/problems`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
}

export async function fetchStats() {
  const res = await axios.get(`${API_URL}/stats`);
  return res.data;
}

export async function fetchUserProfile() {
  const token = getToken();
  const res = await axios.get(`${API_URL}/user/profile`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
}

export async function updateUserProfile(data) {
  const token = getToken();
  const res = await axios.put(`${API_URL}/user/profile`, data, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
}

export async function fetchProgress() {
  const token = getToken();
  const res = await axios.get(`${API_URL}/progress`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data.completedProblems;
}

export async function updateProgress(completedProblems) {
  const token = getToken();
  const res = await axios.put(`${API_URL}/progress`, { completedProblems }, { headers: { Authorization: `Bearer ${token}` } });
  return res.data.completedProblems;
}



// import axios from 'axios';

// // Set up a default instance of axios.
// // Replace 'http://localhost:5001' with your actual backend URL if it's different.
// const API = axios.create({
//   baseURL: 'http://localhost:5001/api',
// });

// // This is a crucial function. It attaches the user's authentication token
// // to every single request they make to the backend.
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// // --- Authentication Calls ---
// export const login = (formData) => API.post('/auth/login', formData);
// export const register = (formData) => API.post('/auth/register', formData);

// // --- Mindmap Data Call ---
// export const getMindmapData = () => API.get('/mindmap/data');

// // --- Progress Calls ---
// export const getProgress = () => API.get('/progress');
// export const updateProgress = (completedProblems) => API.post('/progress', { completedProblems });

