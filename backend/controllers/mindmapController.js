
import Edge from '../models/Edge.js';
import MindmapNode from '../models/MindmapNode.js';
import Problem from '../models/Problem.js';

export async function getMindmap(req, res) {
  try {
    const nodes = await MindmapNode.find().populate('problems children parent');
    res.json({ mindmap: nodes });
  } catch (err) {
    res.status(500).json({ message: 'Failed to get mindmap', error: err.message });
  }
}

export async function createNode(req, res) {
  try {
    const node = await MindmapNode.create(req.body);
    res.status(201).json(node);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create node', error: err.message });
  }
}

export async function updateNode(req, res) {
  try {
    const node = await MindmapNode.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(node);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update node', error: err.message });
  }
}

export async function deleteNode(req, res) {
  try {
    await MindmapNode.findByIdAndDelete(req.params.id);
    res.json({ message: 'Node deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete node', error: err.message });
  }
}

export async function getProblems(req, res) {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get problems', error: err.message });
  }
}

export async function createProblem(req, res) {
  try {
    const problem = await Problem.create(req.body);
    res.status(201).json(problem);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create problem', error: err.message });
  }
}

export async function updateProblem(req, res) {
  try {
    const problem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(problem);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update problem', error: err.message });
  }
}

export async function deleteProblem(req, res) {
  try {
    await Problem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Problem deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete problem', error: err.message });
  }
}


export async function getMindmapData(req, res) {
  try {
    const [nodes, edges, problems] = await Promise.all([
      MindmapNode.find({}),
      Edge.find({}),
      Problem.find({}),
    ]);

    if (!nodes || nodes.length === 0) {
      return res.status(404).json({ message: 'Mindmap data not found. Please run the seed script.' });
    }

    res.status(200).json({ nodes, edges, problems });
  } catch (error) {
    console.error(`Error fetching mindmap data: ${error.message}`);
    res.status(500).json({ message: 'Server error while fetching mindmap data.' });
  }
};

// ====================================================================

// import MindmapNode from '../models/MindmapNode.js';
// import Edge from '../models/Edge.js';
// import Problem from '../models/Problem.js';

// // @desc    Fetch all mindmap data for initial load
// // @route   GET /api/mindmap/data
// // @access  Protected
// const getMindmapData = async (req, res) => {
//   try {
//     const [nodes, edges, problems] = await Promise.all([
//       MindmapNode.find({}),
//       Edge.find({}),
//       Problem.find({})
//     ]);

//     if (!nodes || nodes.length === 0) {
//       return res.status(404).json({ message: 'Mindmap data not found. Run the seed script.' });
//     }

//     res.status(200).json({ nodes, edges, problems });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error: ' + error.message });
//   }
// };


// // --- Node Controller Functions ---

// // @desc    Create a new mindmap node
// // @route   POST /api/mindmap/nodes
// // @access  Protected (Admin)
// const createNode = async (req, res) => {
//   try {
//     const node = await MindmapNode.create(req.body);
//     res.status(201).json(node);
//   } catch (err) {
//     res.status(400).json({ message: 'Failed to create node', error: err.message });
//   }
// };

// // @desc    Update a mindmap node
// // @route   PUT /api/mindmap/nodes/:id
// // @access  Protected (Admin)
// const updateNode = async (req, res) => {
//   try {
//     const node = await MindmapNode.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!node) {
//         return res.status(404).json({ message: 'Node not found' });
//     }
//     res.json(node);
//   } catch (err) {
//     res.status(400).json({ message: 'Failed to update node', error: err.message });
//   }
// };

// // @desc    Delete a mindmap node
// // @route   DELETE /api/mindmap/nodes/:id
// // @access  Protected (Admin)
// const deleteNode = async (req, res) => {
//   try {
//     const node = await MindmapNode.findByIdAndDelete(req.params.id);
//      if (!node) {
//         return res.status(404).json({ message: 'Node not found' });
//     }
//     res.json({ message: 'Node deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ message: 'Failed to delete node', error: err.message });
//   }
// };


// // // --- Problem Controller Functions ---

// // @desc    Get all problems
// // @route   GET /api/mindmap/problems
// // @access  Protected
// const getProblems = async (req, res) => {
//   try {
//     const problems = await Problem.find({});
//     res.json(problems);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to get problems', error: err.message });
//   }
// };

// // @desc    Create a new problem
// // @route   POST /api/mindmap/problems
// // @access  Protected (Admin)
// const createProblem = async (req, res) => {
//   try {
//     const problem = await Problem.create(req.body);
//     res.status(201).json(problem);
//   } catch (err) {
//     res.status(400).json({ message: 'Failed to create problem', error: err.message });
//   }
// };

// // @desc    Update a problem
// // @route   PUT /api/mindmap/problems/:id
// // @access  Protected (Admin)
// const updateProblem = async (req, res) => {
//   try {
//     const problem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!problem) {
//         return res.status(404).json({ message: 'Problem not found' });
//     }
//     res.json(problem);
//   } catch (err) {
//     res.status(400).json({ message: 'Failed to update problem', error: err.message });
//   }
// };

// // @desc    Delete a problem
// // @route   DELETE /api/mindmap/problems/:id
// // @access  Protected (Admin)
// const deleteProblem = async (req, res) => {
//   try {
//     const problem = await Problem.findByIdAndDelete(req.params.id);
//     if (!problem) {
//         return res.status(404).json({ message: 'Problem not found' });
//     }
//     res.json({ message: 'Problem deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ message: 'Failed to delete problem', error: err.message });
//   }
// };

// export {
//   getMindmapData,
//   createNode,
//   updateNode,
//   deleteNode,
//   getProblems,
//   createProblem,
//   updateProblem,
//   deleteProblem
// };





