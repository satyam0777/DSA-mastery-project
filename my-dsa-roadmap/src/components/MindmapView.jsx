//  # The main SVG mindmap canvas

import React, { useState, useMemo } from 'react';
import { RefreshCw, MousePointer } from 'lucide-react';
import DetailsPanel from './DetailsPanel';
import { adjustBrightness, getNodeProgress } from '../utils/helpers';

export default function MindmapView({ nodes, edges, selected, setSelected, completedProblems, setCompletedProblems }) {
  const [viewTransform, setViewTransform] = useState({ scale: 0.8, x: 0, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredEdge, setHoveredEdge] = useState(null);

  const nodeMap = useMemo(() => new Map(nodes.map(n => [n.id, n])), [nodes]);

  const handleMouseDown = (e) => { setIsDragging(true); setDragStart({ x: e.clientX, y: e.clientY }); };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setViewTransform(prev => ({ ...prev, x: prev.x + dx, y: prev.y + dy }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };
  const handleMouseUp = () => { setIsDragging(false); };
  const resetView = () => { setViewTransform({ scale: 0.8, x: 0, y: 50 }); };

  return (
    <div className="relative w-full h-full">
      <div className="aurora-bg"></div>
      <svg width="100%" height="100%" className={`absolute left-0 top-0 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
        <defs>
          {nodes.map(node => (
            <linearGradient key={node.id} id={`gradient-${node.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={node.color} />
              <stop offset="100%" stopColor={adjustBrightness(node.color, -20)} />
            </linearGradient>
          ))}
        </defs>
        <g transform={`translate(${viewTransform.x}, ${viewTransform.y}) scale(${viewTransform.scale})`}>
          {edges.map((edge, i) => {
            const from = nodeMap.get(edge.from);
            const to = nodeMap.get(edge.to);
            if (!from || !to) return null;
            return (
              <g key={i}>
                <line x1={from.x + from.w / 2} y1={from.y + from.h / 2} x2={to.x + to.w / 2} y2={to.y + to.h / 2} stroke={edge.type === "mix" ? "#94a3b8" : "#475569"} strokeDasharray={edge.type === "mix" ? "8 4" : ""} strokeWidth={edge.type === "parent" ? 3 : 2} opacity={hoveredEdge === i ? 0.9 : 0.6} onMouseEnter={() => setHoveredEdge(i)} onMouseLeave={() => setHoveredEdge(null)} className="transition-opacity duration-200" />
              </g>
            );
          })}
          {nodes.map(node => {
            const nodeProgress = getNodeProgress(node.id, completedProblems);
            const isSelected = selected === node.id;
            return (
              <g key={node.id} onClick={() => setSelected(node.id)} className="cursor-pointer">
                <rect x={node.x} y={node.y} width={node.w} height={node.h} rx={16} fill={`url(#gradient-${node.id})`} stroke={isSelected ? "#6366f1" : "rgba(255,255,255,0.8)"} strokeWidth={isSelected ? 5 : 2.5} className={`transition-all duration-300 hover:brightness-110 ${isSelected ? 'pulsate' : ''}`} />
                {nodeProgress.total > 0 && (<rect x={node.x} y={node.y + node.h - 4} width={node.w * (nodeProgress.completed / nodeProgress.total)} height={4} rx={2} fill="rgba(255,255,255,0.9)" />)}
                <text x={node.x + node.w / 2} y={node.y + node.h / 2 - 8} textAnchor="middle" alignmentBaseline="middle" fontSize={node.level === 0 ? 20 : 14} fontWeight="600" fill="white" className="select-none pointer-events-none">{node.label}</text>
                {node.examples.length > 0 && (<text x={node.x + node.w / 2} y={node.y + node.h / 2 + 12} textAnchor="middle" alignmentBaseline="middle" fontSize={10} fill="rgba(255,255,255,0.9)" className="select-none pointer-events-none">{node.examples[0]}</text>)}
                {nodeProgress.total > 0 && (<text x={node.x + node.w - 8} y={node.y + 16} textAnchor="end" fontSize={10} fill="rgba(255,255,255,0.8)" fontWeight="600" className="select-none pointer-events-none">{Math.round((nodeProgress.completed / nodeProgress.total) * 100)}%</text>)}
              </g>
            );
          })}
        </g>
      </svg>
      <div className="absolute bottom-4 right-4 flex flex-col gap-2"><button onClick={resetView} title="Reset View" className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-slate-200 transition-colors"><RefreshCw className="w-5 h-5 text-gray-700" /></button></div>
      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md rounded-lg p-2 text-xs text-gray-600 shadow-lg flex items-center gap-2"><MousePointer className="w-4 h-4" /><span>Click & Drag to Pan</span></div>
      <DetailsPanel selectedId={selected} onClose={() => setSelected(null)} onSelectNode={setSelected} {...{ nodes, edges, completedProblems, setCompletedProblems }} />
    </div>
  );
}



//===============================================

// import React, { useState, useMemo } from 'react';
// import { RefreshCw, MousePointer } from 'lucide-react';
// import DetailsPanel from './DetailsPanel.jsx';
// import { adjustBrightness, getNodeProgress } from '../utils/helpers.js';

// // The component now accepts the 'problems' prop from App.jsx
// export default function MindmapView({ nodes, edges, problems, selected, setSelected, completedProblems, setCompletedProblems }) {
//   const [viewTransform, setViewTransform] = useState({ scale: 0.8, x: 0, y: 50 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const [hoveredEdge, setHoveredEdge] = useState(null);

//   // FIXED: The map now uses `_id` which comes from MongoDB
//   const nodeMap = useMemo(() => new Map(nodes.map(n => [n._id, n])), [nodes]);

//   const handleMouseDown = (e) => { setIsDragging(true); setDragStart({ x: e.clientX, y: e.clientY }); };
//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const dx = e.clientX - dragStart.x;
//     const dy = e.clientY - dragStart.y;
//     setViewTransform(prev => ({ ...prev, x: prev.x + dx, y: prev.y + dy }));
//     setDragStart({ x: e.clientX, y: e.clientY });
//   };
//   const handleMouseUp = () => { setIsDragging(false); };
//   const resetView = () => { setViewTransform({ scale: 0.8, x: 0, y: 50 }); };

//   return (
//     <div className="relative w-full h-full">
//       <div className="aurora-bg"></div>
//       <svg width="100%" height="100%" className={`absolute left-0 top-0 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
//         <defs>
//           {/* FIXED: Using `_id` for the key */}
//           {nodes.map(node => (
//             <linearGradient key={node._id} id={`gradient-${node._id}`} x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor={node.color} />
//               <stop offset="100%" stopColor={adjustBrightness(node.color, -20)} />
//             </linearGradient>
//           ))}
//         </defs>
//         <g transform={`translate(${viewTransform.x}, ${viewTransform.y}) scale(${viewTransform.scale})`}>
//           {edges.map(edge => {
//             const from = nodeMap.get(edge.from);
//             const to = nodeMap.get(edge.to);
//             if (!from || !to) return null;
//             return (
//               // FIXED: Using a more stable unique key instead of index
//               <g key={`edge-${edge.from}-${edge.to}`}>
//                 <line x1={from.x + from.w / 2} y1={from.y + from.h / 2} x2={to.x + to.w / 2} y2={to.y + to.h / 2} stroke={edge.type === "mix" ? "#94a3b8" : "#475569"} strokeDasharray={edge.type === "mix" ? "8 4" : ""} strokeWidth={edge.type === "parent" ? 3 : 2} opacity={hoveredEdge === edge._id ? 0.9 : 0.6} onMouseEnter={() => setHoveredEdge(edge._id)} onMouseLeave={() => setHoveredEdge(null)} className="transition-opacity duration-200" />
//               </g>
//             );
//           })}
//           {nodes.map(node => {
//             // FIXED: Passing the full 'problems' list to the helper
//             const nodeProgress = getNodeProgress(node._id, problems, completedProblems);
//             const isSelected = selected === node._id;
//             return (
//               // FIXED: Using `_id` for key and selection
//               <g key={node._id} onClick={() => setSelected(node._id)} className="cursor-pointer">
//                 <rect x={node.x} y={node.y} width={node.w} height={node.h} rx={16} fill={`url(#gradient-${node._id})`} stroke={isSelected ? "#6366f1" : "rgba(255,255,255,0.8)"} strokeWidth={isSelected ? 5 : 2.5} className={`transition-all duration-300 hover:brightness-110 ${isSelected ? 'pulsate' : ''}`} />
//                 {nodeProgress.total > 0 && (<rect x={node.x} y={node.y + node.h - 4} width={node.w * (nodeProgress.completed / nodeProgress.total)} height={4} rx={2} fill="rgba(255,255,255,0.9)" />)}
//                 <text x={node.x + node.w / 2} y={node.y + node.h / 2 - 8} textAnchor="middle" alignmentBaseline="middle" fontSize={node.level === 0 ? 20 : 14} fontWeight="600" fill="white" className="select-none pointer-events-none">{node.label}</text>
//                 {node.examples && node.examples.length > 0 && (<text x={node.x + node.w / 2} y={node.y + node.h / 2 + 12} textAnchor="middle" alignmentBaseline="middle" fontSize={10} fill="rgba(255,255,255,0.9)" className="select-none pointer-events-none">{node.examples[0]}</text>)}
//                 {nodeProgress.total > 0 && (<text x={node.x + node.w - 8} y={node.y + 16} textAnchor="end" fontSize={10} fill="rgba(255,255,255,0.8)" fontWeight="600" className="select-none pointer-events-none">{Math.round((nodeProgress.completed / nodeProgress.total) * 100)}%</text>)}
//               </g>
//             );
//           })}
//         </g>
//       </svg>
//       <div className="absolute bottom-4 right-4 flex flex-col gap-2"><button onClick={resetView} title="Reset View" className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-slate-200 transition-colors"><RefreshCw className="w-5 h-5 text-gray-700" /></button></div>
//       <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md rounded-lg p-2 text-xs text-gray-600 shadow-lg flex items-center gap-2"><MousePointer className="w-4 h-4" /><span>Click & Drag to Pan</span></div>
      
//       {/* FIXED: Passing the 'problems' prop down to the DetailsPanel */}
//       <DetailsPanel 
//         selectedId={selected} 
//         onClose={() => setSelected(null)} 
//         onSelectNode={setSelected} 
//         {...{ nodes, edges, problems, completedProblems, setCompletedProblems }} 
//       />
//     </div>
//   );
// }

