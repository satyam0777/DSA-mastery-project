import User from '../models/User.js';
import Problem from '../models/Problem.js';
import Pattern from '../models/Pattern.js';

export async function getStats(req, res) {
  try {
    const userCount = await User.countDocuments();
    const problemCount = await Problem.countDocuments();
    const patternCount = await Pattern.countDocuments();
    res.json({ users: userCount, problems: problemCount, patterns: patternCount });
  } catch (err) {
    res.status(500).json({ message: 'Failed to get stats', error: err.message });
  }
}
