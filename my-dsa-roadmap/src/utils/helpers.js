import { getLeetCodeProblems } from '../data/problemData';



export function getNodeProgress(nodeId, completedProblems) {
  const problems = getLeetCodeProblems(nodeId);
  const completed = problems.filter((p) => completedProblems[p.name]).length;
  return { total: problems.length, completed };
}

export function adjustBrightness(hex, percent) {
  hex = hex.replace('#', '');
  const num = parseInt(hex, 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
  const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

// export function getNodeProgress(nodeId, allProblems, completedProblems) {
//   // Filter all problems to find only those belonging to the current node
// //   const problemsForNode = allProblems.filter(p => p.nodeId === nodeId);
//     const problems = getLeetCodeProblems(nodeId);
//   // Count how many of those problems are marked as complete
//   const completedCount = problemsForNode.filter(p => completedProblems[p.name]).length;
  
//   return { 
//     total: problems.length, 
//     completed: completedCount 
//   };
// }

// This function adjusts the brightness of a hex color for the gradients.
// export function adjustBrightness(hex, percent) {
//   hex = hex.replace('#', '');
//   const num = parseInt(hex, 16);
//   const amt = Math.round(2.55 * percent);
//   const R = Math.max(0, Math.min(255, (num >> 16) + amt));
//   const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
//   const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
//   return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
// }
