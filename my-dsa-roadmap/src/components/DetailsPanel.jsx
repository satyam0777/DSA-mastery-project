// import React, { useState, useMemo, useEffect } from 'react';
// import { updateProgress } from '../api';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, ExternalLink, CheckCircle, Circle, X, Filter, BrainCircuit, GitBranch, Link2 } from 'lucide-react';
// import { getLeetCodeProblems } from '../data/problemData';
// import { getDetailedNodeContent } from '../data/contentData';
// import { getNodeProgress } from '../utils/helpers';

// // A constant for the header height to be reused
// const HEADER_HEIGHT = 64; // in pixels



// export default function DetailsPanel({ selectedId, onClose, onSelectNode, nodes, edges, completedProblems, setCompletedProblems }) {
//   const node = useMemo(() => nodes.find((n) => n.id === selectedId), [nodes, selectedId]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [difficultyFilter, setDifficultyFilter] = useState("all");

//   const { children, parents, mixWith } = useMemo(() => {
//     if (!node) return { children: [], parents: [], mixWith: [] };
//     const children = [], parents = [], mixWith = [];
//     edges.forEach((e) => {
//       if (e.from === node.id) e.type === "mix" ? mixWith.push(e.to) : children.push(e.to);
//       else if (e.to === node.id) e.type === "mix" ? mixWith.push(e.from) : parents.push(e.from);
//     });
//     return { children, parents, mixWith };
//   }, [edges, node]);
  
//   const problems = getLeetCodeProblems(node?.id);
//   const filteredProblems = useMemo(() => problems.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) && (difficultyFilter === "all" || p.difficulty.toLowerCase() === difficultyFilter)), [problems, searchTerm, difficultyFilter]);
  
//   useEffect(() => {
//       setSearchTerm("");
//       setDifficultyFilter("all");
//   }, [selectedId]);

//   if (!node) return null;

//   const handleToggleComplete = async (problemName) => {
//     const updated = { ...completedProblems, [problemName]: !completedProblems[problemName] };
//     setCompletedProblems(updated);
//     try {
//       await updateProgress(updated);
//     } catch (err) {
//       // Optionally show error to user
//     }
//   };

//   const getLeetCodeUrl = (name) => `https://leetcode.com/problems/${name.split('. ')[1]?.toLowerCase().replace(/[^a-z0-9- ]/g, '').replace(/ /g, '-')}/`;
//   const nodeProgress = getNodeProgress(node.id, completedProblems);
  
//   const panelVariants = { 
//     hidden: { x: "100%" }, 
//     visible: { x: "0%", transition: { type: "spring", stiffness: 400, damping: 40 } },
//     exit: { x: "100%", transition: { type: "tween", duration: 0.2 } } 
//   };
//   const contentVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
//     exit: { opacity: 0, y: -10, transition: { duration: 0.2, when: "afterChildren" } }
//   };
//   const listItemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

//   return (
//     <AnimatePresence>
//       {selectedId && (
//         <>
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/30 z-20 md:hidden" />
//           <motion.div variants={panelVariants} initial="hidden" animate="visible" exit="exit" className="fixed right-0 top-0 h-full w-full max-w-md bg-white/80 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl z-30 flex flex-col" style={{ top: `${HEADER_HEIGHT}px`, height: `calc(100% - ${HEADER_HEIGHT}px)`}}>
//             <AnimatePresence exitBeforeEnter>
//               <motion.div key={selectedId} variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="overflow-y-auto h-full">
//                 <div className="p-6 bg-slate-50/50">
//                     <div className="flex items-start justify-between mb-4">
//                         <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2"><BrainCircuit style={{color: node.color}}/> {node.label}</h2>
//                         <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-200 transition-colors"><X className="w-5 h-5 text-gray-500" /></button>
//                     </div>
//                     <div className="space-y-4 text-sm">
//                       {getDetailedNodeContent(node.id)}
//                     </div>
//                     <div className="mt-4 space-y-4 text-sm">
//                       {parents.length > 0 && <div className="space-y-1"><span className="font-medium text-gray-700 flex items-center gap-1.5"><GitBranch size={14}/> Parent Patterns:</span><div className="flex flex-wrap gap-2 mt-1">{parents.map(pid => <button key={pid} onClick={() => onSelectNode(pid)} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md text-xs hover:bg-purple-200 transition-colors transform hover:scale-105">{nodes.find(n=>n.id===pid)?.label}</button>)}</div></div>}
//                       {children.length > 0 && <div className="space-y-1"><span className="font-medium text-gray-700 flex items-center gap-1.5"><GitBranch size={14} className="rotate-90"/> Child Patterns:</span><div className="flex flex-wrap gap-2 mt-1">{children.map(cid => <button key={cid} onClick={() => onSelectNode(cid)} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md text-xs hover:bg-indigo-200 transition-colors transform hover:scale-105">{nodes.find(n=>n.id===cid)?.label}</button>)}</div></div>}
//                       {mixWith.length > 0 && <div className="space-y-1"><span className="font-medium text-gray-700 flex items-center gap-1.5"><Link2 size={14}/> Mixes With:</span><div className="flex flex-wrap gap-2 mt-1">{mixWith.map(mid => <button key={mid} onClick={() => onSelectNode(mid)} className="px-2 py-1 bg-pink-100 text-pink-800 rounded-md text-xs hover:bg-pink-200 transition-colors transform hover:scale-105">{nodes.find(n=>n.id===mid)?.label}</button>)}</div></div>}
//                     </div>
//                 </div>
//                 {problems.length > 0 ? (
//                   <div className="border-t border-gray-200/80">
//                     <div className="p-4 border-b border-gray-200/80 space-y-3 sticky top-0 bg-slate-50/80 backdrop-blur-sm z-10">
//                       <h3 className="font-semibold text-gray-800">Practice Problems ({nodeProgress.completed}/{nodeProgress.total})</h3>
//                       <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search problems..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"/></div>
//                       <div className="flex items-center gap-2"><Filter className="w-4 h-4 text-gray-500" /><select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm"><option value="all">All Difficulties</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></div>
//                     </div>
//                     <div className="p-4 space-y-3">
//                       <AnimatePresence>
//                         {filteredProblems.map((problem) => {
//                           const isCompleted = completedProblems[problem.name];
//                           return (
//                             <motion.div key={problem.name} variants={listItemVariants} initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.3 }} className={`group p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${isCompleted ? 'bg-green-50/70 border-green-200' : 'bg-white border-gray-200 hover:border-purple-300'}`}>
//                               <div className="flex items-start justify-between gap-3">
//                                 <div className="flex-1 min-w-0">
//                                   <a href={getLeetCodeUrl(problem.name)} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 hover:text-purple-600 transition-colors truncate group-hover:underline flex items-center gap-2">{problem.name} <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" /></a>
//                                   <div className="mt-2"><span className={`px-2 py-1 rounded-md text-xs font-medium ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{problem.difficulty}</span></div>
//                                 </div>
//                                 <button onClick={() => handleToggleComplete(problem.name)} className="p-1 rounded-full hover:bg-slate-100 transition-colors">{isCompleted ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Circle className="w-5 h-5 text-gray-400 group-hover:text-purple-500" />}</button>
//                               </div>
//                             </motion.div>
//                           );
//                         })}
//                       </AnimatePresence>
//                       {filteredProblems.length === 0 && <div className="text-center py-8 text-gray-500 flex flex-col items-center gap-2"><Search size={32} className="opacity-50"/><h4 className="font-semibold">No Problems Found</h4><p className="text-xs">Try adjusting your search or filter.</p></div>}
//                     </div>
//                   </div>
//                 ) : null}
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

//================================================
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, CheckCircle, Circle, X, Filter, BrainCircuit, GitBranch, Link2 } from 'lucide-react';
import { getDetailedNodeContent } from '../data/contentData';

// A constant for the header height to be reused
const HEADER_HEIGHT = 64; // in pixels

export default function DetailsPanel({ selectedId, onClose, onSelectNode, nodes, edges, problems, completedProblems, setCompletedProblems }) {
  // --- All Hooks must be called at the top level ---
  const node = useMemo(() => nodes.find((n) => n._id === selectedId), [nodes, selectedId]);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const { children, parents, mixWith } = useMemo(() => {
    if (!node) return { children: [], parents: [], mixWith: [] };
    const children = [], parents = [], mixWith = [];
    edges.forEach((e) => {
      if (e.from === node._id) e.type === "mix" ? mixWith.push(e.to) : children.push(e.to);
      else if (e.to === node._id) e.type === "mix" ? mixWith.push(e.from) : parents.push(e.from);
    });
    return { children, parents, mixWith };
  }, [edges, node]);
  
  const problemsForNode = useMemo(() => {
    if (!node || !problems) return [];
    return problems.filter(p => p.nodeId === node._id);
  }, [node, problems]);

  const filteredProblems = useMemo(() => 
    problemsForNode.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (difficultyFilter === "all" || p.difficulty.toLowerCase() === difficultyFilter)
    ), 
  [problemsForNode, searchTerm, difficultyFilter]);
  
  // FIXED: Moved this hook before the early return to ensure it's always called.
  const nodeProgress = useMemo(() => {
      if (!problemsForNode) return { total: 0, completed: 0 };
      const completed = problemsForNode.filter(p => completedProblems[p.name]).length;
      return { total: problemsForNode.length, completed };
  }, [problemsForNode, completedProblems]);

  useEffect(() => {
      setSearchTerm("");
      setDifficultyFilter("all");
  }, [selectedId]);

  // The early return must come AFTER all hook calls.
  if (!node) return null;

  const handleToggleComplete = async (problemName) => {
    const updated = { ...completedProblems, [problemName]: !completedProblems[problemName] };
    setCompletedProblems(updated);
    // This part assumes you have an API call set up to save progress
  };

  const getLeetCodeUrl = (name) => `https://leetcode.com/problems/${name.split('. ')[1]?.toLowerCase().replace(/[^a-z0-9- ]/g, '').replace(/ /g, '-')}/`;
  
  const panelVariants = { 
    hidden: { x: "100%" }, 
    visible: { x: "0%", transition: { type: "spring", stiffness: 400, damping: 40 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.2 } } 
  };
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, when: "afterChildren" } }
  };
  const listItemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <AnimatePresence>
      {selectedId && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/30 z-20 md:hidden" />
          <motion.div variants={panelVariants} initial="hidden" animate="visible" exit="exit" className="fixed right-0 top-0 h-full w-full max-w-md bg-white/80 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl z-30 flex flex-col" style={{ top: `${HEADER_HEIGHT}px`, height: `calc(100% - ${HEADER_HEIGHT}px)`}}>
            <AnimatePresence mode="wait">
              <motion.div key={selectedId} variants={contentVariants} initial="hidden" animate="visible" exit="exit" className="overflow-y-auto h-full">
                <div className="p-6 bg-slate-50/50">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2"><BrainCircuit style={{color: node.color}}/> {node.label}</h2>
                    <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-200 transition-colors"><X className="w-5 h-5 text-gray-500" /></button>
                  </div>
                  <div className="space-y-4 text-sm">
                    {getDetailedNodeContent(node._id)}
                  </div>
                  <div className="mt-4 space-y-4 text-sm">
                    {parents.length > 0 && <div className="space-y-1"><span className="font-medium text-gray-700 flex items-center gap-1.5"><GitBranch size={14}/> Parent Patterns:</span><div className="flex flex-wrap gap-2 mt-1">{parents.map(pid => <button key={pid} onClick={() => onSelectNode(pid)} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md text-xs hover:bg-purple-200 transition-colors transform hover:scale-105">{nodes.find(n=>n._id===pid)?.label}</button>)}</div></div>}
                    {children.length > 0 && <div className="space-y-1"><span className="font-medium text-gray-700 flex items-center gap-1.5"><GitBranch size={14} className="rotate-90"/> Child Patterns:</span><div className="flex flex-wrap gap-2 mt-1">{children.map(cid => <button key={cid} onClick={() => onSelectNode(cid)} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md text-xs hover:bg-indigo-200 transition-colors transform hover:scale-105">{nodes.find(n=>n._id===cid)?.label}</button>)}</div></div>}
                    {mixWith.length > 0 && <div className="space-y-1"><span className="font-medium text-gray-700 flex items-center gap-1.5"><Link2 size={14}/> Mixes With:</span><div className="flex flex-wrap gap-2 mt-1">{mixWith.map(mid => <button key={mid} onClick={() => onSelectNode(mid)} className="px-2 py-1 bg-pink-100 text-pink-800 rounded-md text-xs hover:bg-pink-200 transition-colors transform hover:scale-105">{nodes.find(n=>n._id===mid)?.label}</button>)}</div></div>}
                  </div>
                </div>
                {problemsForNode.length > 0 ? (
                  <div className="border-t border-gray-200/80">
                    <div className="p-4 border-b border-gray-200/80 space-y-3 sticky top-0 bg-slate-50/80 backdrop-blur-sm z-10">
                      <h3 className="font-semibold text-gray-800">Practice Problems ({nodeProgress.completed}/{nodeProgress.total})</h3>
                      <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search problems..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"/></div>
                      <div className="flex items-center gap-2"><Filter className="w-4 h-4 text-gray-500" /><select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm"><option value="all">All Difficulties</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></div>
                    </div>
                    <div className="p-4 space-y-3">
                      <AnimatePresence>
                        {filteredProblems.map((problem) => {
                          const isCompleted = completedProblems[problem.name];
                          return (
                            <motion.div key={problem.name} variants={listItemVariants} initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.3 }} className={`group p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${isCompleted ? 'bg-green-50/70 border-green-200' : 'bg-white border-gray-200 hover:border-purple-300'}`}>
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <a href={getLeetCodeUrl(problem.name)} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 hover:text-purple-600 transition-colors truncate group-hover:underline flex items-center gap-2">{problem.name} <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" /></a>
                                  <div className="mt-2"><span className={`px-2 py-1 rounded-md text-xs font-medium ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{problem.difficulty}</span></div>
                                </div>
                                <button onClick={() => handleToggleComplete(problem.name)} className="p-1 rounded-full hover:bg-slate-100 transition-colors">{isCompleted ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Circle className="w-5 h-5 text-gray-400 group-hover:text-purple-500" />}</button>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                      {filteredProblems.length === 0 && <div className="text-center py-8 text-gray-500 flex flex-col items-center gap-2"><Search size={32} className="opacity-50"/><h4 className="font-semibold">No Problems Found</h4><p className="text-xs">Try adjusting your search or filter.</p></div>}
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

