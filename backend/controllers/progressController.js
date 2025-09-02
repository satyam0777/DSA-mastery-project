// import User from '../models/User.js';

// export async function getProgress(req, res) {
//   try {
//     const user = await User.findById(req.user.id);
//     res.json({ completedProblems: user.completedProblems });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to get progress', error: err.message });
//   }
// }

// export async function updateProgress(req, res) {
//   try {
//     const { completedProblems } = req.body;
//     const user = await User.findByIdAndUpdate(req.user.id, { completedProblems }, { new: true });
//     res.json({ completedProblems: user.completedProblems });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to update progress', error: err.message });
//   }
// }



import User from '../models/User.js';

// @desc    Get the logged-in user's progress
// @route   GET /api/progress
export const getProgress = async (req, res) => {
  try {
    // req.user.id is attached by the 'protect' middleware
    const user = await User.findById(req.user.id);
    if (user) {
      res.json({ completedProblems: user.completedProblems });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update the logged-in user's progress
// @route   POST /api/progress
export const updateProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user) {
      user.completedProblems = req.body.completedProblems || user.completedProblems;
      const updatedUser = await user.save();
      res.json({ completedProblems: updatedUser.completedProblems });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};