import User from '../models/User.js';
import Problem from '../models/Problem.js';

export async function getStats(req, res) {
  try {
    const totalUsers = await User.countDocuments();
    const totalProblems = await Problem.countDocuments();

    // Defensive calculation of completed problems across users.
    // Some environments store `completedProblems` as a Map (Mongoose Map) or as a plain object.
    const users = await User.find({}, 'completedProblems').lean();
    let completedCount = 0;

    for (const u of users) {
      const cp = u.completedProblems;
      if (!cp) continue;

      // If it's stored as an object (plain) or as a POJO after .lean()
      if (typeof cp === 'object' && !Array.isArray(cp)) {
        try {
          completedCount += Object.keys(cp).length;
        } catch (e) {
          // fallback: ignore this user's progress
        }
      } else if (typeof cp === 'string') {
        // unexpected string format, try parsing
        try {
          const parsed = JSON.parse(cp);
          completedCount += Object.keys(parsed).length;
        } catch (e) {
          // ignore
        }
      }
    }

    res.status(200).json({
      totalUsers,
      totalProblems,
      problemsCompleted: completedCount,
    });
  } catch (error) {
    console.error('Error in getStats:', error);
    res.status(500).json({ message: 'Error fetching stats', error: error.message });
  }
}
