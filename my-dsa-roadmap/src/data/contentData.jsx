


// import React from 'react';
// import { Github, ShieldQuestion, Code } from "lucide-react";



// export function getDetailedNodeContent(nodeId) {
//     const content = {
//         root: (<div><div className="space-y-2"><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> What is this?</h3><p className="text-gray-600">This is an interactive mindmap designed to help you master the core patterns of Data Structures and Algorithms. Instead of memorizing solutions, learn the underlying techniques that solve entire classes of problems.</p></div><div className="pt-4"><a href="https://github.com/satyam0777/DSA-Placement/tree/main" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium shadow-sm"><Github className="w-4 h-4" /> View original project on GitHub</a></div></div>),
//         arrays: (<div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">Arrays store elements in contiguous memory, enabling instant O(1) access by index. This makes sequential iteration exceptionally fast due to CPU caching. A string is essentially an immutable array of characters.</p></div><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><Code/> Common Techniques</h3><ul className="list-disc list-inside text-gray-600 mt-1 space-y-1"><li><strong>Two Pointers:</strong> Using two indices to iterate, find pairs, or reverse.</li><li><strong>Sliding Window:</strong> A dynamic subarray to find optimal ranges.</li><li><strong>Prefix Sum:</strong> Pre-calculating sums for rapid range sum queries.</li></ul></div></div>),
//         hashing: (<div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">Hash Tables (or Hash Maps) use a hash function to map keys to indices in an array, providing average-case O(1) time for insertions, deletions, and lookups. They are essential for frequency counting and quick data retrieval.</p></div><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><Code/> Common Techniques</h3><ul className="list-disc list-inside text-gray-600 mt-1 space-y-1"><li><strong>Frequency Counting:</strong> Tracking occurrences of elements.</li><li><strong>Two-Sum Pattern:</strong> Finding pairs that sum to a target by checking for `target - current` in the map.</li><li><strong>Caching/Memoization:</strong> Storing results of expensive computations.</li></ul></div></div>),
//         trees: (<div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">Trees are hierarchical data structures with a root node and child nodes. Key types include Binary Trees (max two children) and Binary Search Trees (ordered children). Traversal is key: BFS explores level-by-level, while DFS explores branch-by-branch.</p></div><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><Code/> Common Techniques</h3><ul className="list-disc list-inside text-gray-600 mt-1 space-y-1"><li><strong>Depth-First Search (DFS):</strong> In-order, Pre-order, Post-order traversals.</li><li><strong>Breadth-First Search (BFS):</strong> Level-order traversal, finds shortest paths.</li><li><strong>Recursion:</strong> Most tree problems have elegant recursive solutions.</li></ul></div></div>),
//         dynamic: (<div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">Dynamic Programming (DP) is an optimization technique for solving complex problems by breaking them down into simpler, overlapping subproblems. Solutions to subproblems are stored to avoid redundant calculations.</p></div><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><Code/> Common Techniques</h3><ul className="list-disc list-inside text-gray-600 mt-1 space-y-1"><li><strong>Memoization (Top-Down):</strong> A recursive approach where you cache results.</li><li><strong>Tabulation (Bottom-Up):</strong> An iterative approach where you build a table of solutions from the base case up.</li></ul></div></div>),
//         search: (<div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">This category focuses on efficient searching and sorting algorithms. The most critical pattern is Binary Search, a powerful "divide and conquer" strategy that works on sorted collections to find elements in logarithmic time.</p></div><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><Code/> Common Techniques</h3><ul className="list-disc list-inside text-gray-600 mt-1 space-y-1"><li><strong>Binary Search:</strong> Halving the search space in each step.</li><li><strong>Sorting Algorithms:</strong> Understanding trade-offs of Merge Sort, Quick Sort, etc.</li></ul></div></div>),
//         twoptr: (<div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">A versatile pattern using two pointers to iterate through a data structure. It's highly efficient, often reducing time complexity from O(n²) to O(n) and using O(1) space.</p></div><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><Code/> Variations</h3><ul className="list-disc list-inside text-gray-600 mt-1 space-y-1"><li><strong>Opposite Ends:</strong> Pointers start at the beginning and end, moving inward.</li><li><strong>Fast & Slow:</strong> Pointers move at different speeds, often to detect cycles.</li></ul></div></div>),
//         sliding: (<div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">The Sliding Window pattern involves creating a "window" (a sub-array or sub-string) that slides through the data. It's used to efficiently find a contiguous section that satisfies a given condition, avoiding nested loops.</p></div><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><Code/> Variations</h3><ul className="list-disc list-inside text-gray-600 mt-1 space-y-1"><li><strong>Fixed Size Window:</strong> The window size remains constant.</li><li><strong>Dynamic Size Window:</strong> The window grows and shrinks based on conditions.</li></ul></div></div>),
//         backtrack: (<div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">Backtracking is a recursive technique for solving problems by trying to build a solution incrementally. If an option doesn't lead to a solution, it "backtracks" to try another path. It's a form of brute-force, but intelligently pruned.</p></div><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><Code/> Mantra</h3><p className="text-gray-600 mt-1">"Choose, Explore, Unchoose". This framework is key to solving permutation, combination, and subset problems.</p></div></div>),
//         heap: (<div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">A Heap is a tree-based data structure that satisfies the heap property (e.g., in a min-heap, every parent is smaller than its children). It's primarily used to implement Priority Queues for efficient retrieval of the min/max element.</p></div><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><Code/> Common Use Cases</h3><ul className="list-disc list-inside text-gray-600 mt-1 space-y-1"><li>Finding the "Top K" elements in a collection.</li><li>Finding the median in a stream of numbers.</li><li>Implementing Dijkstra's shortest path algorithm.</li></ul></div></div>),
//     };
//     return content[nodeId] || <div className="space-y-4"><div><h3 className="font-semibold text-gray-800 flex items-center gap-2"><ShieldQuestion/> Core Concepts</h3><p className="text-gray-600 mt-1">{`Details for this pattern are coming soon! This topic covers ${nodeId.replace(/^\w/, c => c.toUpperCase())}.`}</p></div></div>;
// }




// import React, { useState } from 'react';
// import { Github, ShieldQuestion, Code, BookOpen, Lightbulb, Target, ChevronRight, ExternalLink, Brain, Zap, TreePine, Hash, Search, Users, Layers, RotateCcw, Mountain } from "lucide-react";

// const ContentCard = ({ icon: Icon, title, children, className = "" }) => (
//   <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 ${className}`}>
//     <h3 className="font-bold text-gray-800 flex items-center gap-3 mb-4 text-lg">
//       <div className="p-2 bg-blue-100 rounded-lg">
//         <Icon className="w-5 h-5 text-blue-600" />
//       </div>
//       {title}
//     </h3>
//     {children}
//   </div>
// );

// const TechniqueItem = ({ technique, description, gradient = "from-blue-50 to-indigo-50" }) => (
//   <div className={`bg-gradient-to-r ${gradient} rounded-lg p-4 border-l-4 border-blue-500 transition-all hover:shadow-md hover:scale-[1.02]`}>
//     <div className="flex items-start gap-3">
//       <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
//       <div>
//         <span className="font-semibold text-gray-800">{technique}:</span>
//         <p className="text-gray-600 mt-1">{description}</p>
//       </div>
//     </div>
//   </div>
// );

// const PatternShowcase = ({ nodeId }) => {
//   const [selectedNode, setSelectedNode] = useState(nodeId || 'root');
  
//   const nodeIcons = {
//     root: Brain,
//     arrays: Layers,
//     hashing: Hash,
//     trees: TreePine,
//     dynamic: Zap,
//     search: Search,
//     twoptr: Users,
//     sliding: Mountain,
//     backtrack: RotateCcw,
//     heap: Mountain
//   };

//   const nodeColors = {
//     root: "from-purple-500 to-pink-500",
//     arrays: "from-blue-500 to-cyan-500",
//     hashing: "from-green-500 to-emerald-500",
//     trees: "from-orange-500 to-red-500",
//     dynamic: "from-yellow-500 to-orange-500",
//     search: "from-indigo-500 to-purple-500",
//     twoptr: "from-pink-500 to-rose-500",
//     sliding: "from-teal-500 to-cyan-500",
//     backtrack: "from-violet-500 to-purple-500",
//     heap: "from-emerald-500 to-teal-500"
//   };

//     const getDetailedNodeContent = (nodeId) => {
//     const IconComponent = nodeIcons[nodeId] || Brain;
//     const colorGradient = nodeColors[nodeId] || "from-gray-500 to-gray-600";
    
//     const content = {
//       root: (
//         <div className="space-y-8">
//           <div className="text-center">
//             <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${colorGradient} rounded-2xl mb-6 shadow-lg`}>
//               <IconComponent className="w-10 h-10 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">DSA Master Patterns</h2>
//             <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
//               Master the core patterns that unlock thousands of coding problems. Learn the underlying techniques that solve entire classes of problems, not just individual solutions.
//             </p>
//           </div>
          
//           <ContentCard icon={Target} title="Learning Philosophy" className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 Instead of memorizing hundreds of solutions, master these fundamental patterns. Each pattern is a powerful tool that can solve dozens of problems across different domains.
//               </p>
//               <div className="grid md:grid-cols-2 gap-4 mt-6">
//                 <div className="bg-white p-4 rounded-lg border border-purple-100">
//                   <Lightbulb className="w-6 h-6 text-yellow-500 mb-2" />
//                   <h4 className="font-semibold text-gray-800">Pattern Recognition</h4>
//                   <p className="text-gray-600 text-sm mt-1">Learn to identify which pattern applies to new problems</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg border border-purple-100">
//                   <BookOpen className="w-6 h-6 text-blue-500 mb-2" />
//                   <h4 className="font-semibold text-gray-800">Deep Understanding</h4>
//                   <p className="text-gray-600 text-sm mt-1">Understand why each technique works and when to use it</p>
//                 </div>
//               </div>
//             </div>
//           </ContentCard>

//           <div className="text-center">
//             <a 
//               href="https://github.com/satyam0777/DSA-Placement/tree/main" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl hover:from-gray-800 hover:to-gray-600 transition-all transform hover:scale-105 shadow-lg font-semibold"
//             >
//               <Github className="w-6 h-6" /> 
//               <span>Explore Full Project</span>
//               <ExternalLink className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       ),

//       arrays: (
//         <div className="space-y-6">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//             <IconComponent className="w-8 h-8 text-white" />
//           </div>
          
//           <ContentCard icon={ShieldQuestion} title="Core Concepts">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 Arrays are the foundation of computer science - elements stored in contiguous memory locations, enabling lightning-fast O(1) access by index. This contiguous storage makes sequential iteration exceptionally efficient due to CPU caching benefits.
//               </p>
//               <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
//                 <p className="text-gray-700 font-medium">💡 Pro Tip: Remember that strings are essentially immutable arrays of characters, so most array techniques apply to string problems too!</p>
//               </div>
//             </div>
//           </ContentCard>

//           <ContentCard icon={Code} title="Essential Techniques">
//             <div className="space-y-4">
//               <TechniqueItem 
//                 technique="Two Pointers" 
//                 description="Use two indices to iterate through the array, often from opposite ends or at different speeds. Perfect for finding pairs, reversing, or detecting patterns."
//                 gradient="from-blue-50 to-cyan-50"
//               />
//               <TechniqueItem 
//                 technique="Sliding Window" 
//                 description="Maintain a dynamic subarray that expands and contracts based on conditions. Ideal for finding optimal subarrays or substrings."
//                 gradient="from-green-50 to-emerald-50"
//               />
//               <TechniqueItem 
//                 technique="Prefix Sum" 
//                 description="Pre-calculate cumulative sums to answer range sum queries in O(1) time. Transforms O(n) range queries into constant time."
//                 gradient="from-purple-50 to-violet-50"
//               />
//             </div>
//           </ContentCard>
//         </div>
//       ),

//       hashing: (
//         <div className="space-y-6">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//             <IconComponent className="w-8 h-8 text-white" />
//           </div>
          
//           <ContentCard icon={ShieldQuestion} title="Core Concepts">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 Hash Tables are the Swiss Army knife of data structures. They use hash functions to map keys to array indices, providing average-case O(1) time complexity for insertions, deletions, and lookups. This makes them indispensable for frequency counting and rapid data retrieval.
//               </p>
//               <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
//                 <p className="text-gray-700 font-medium">🚀 Power Move: Hash tables can often reduce O(n²) brute force solutions to O(n) by trading space for time!</p>
//               </div>
//             </div>
//           </ContentCard>

//           <ContentCard icon={Code} title="Master Techniques">
//             <div className="space-y-4">
//               <TechniqueItem 
//                 technique="Frequency Counting" 
//                 description="Track occurrences of elements to solve problems involving duplicates, anagrams, or character patterns."
//                 gradient="from-green-50 to-emerald-50"
//               />
//               <TechniqueItem 
//                 technique="Two-Sum Pattern" 
//                 description="For each element, check if 'target - current' exists in the hash map. This pattern extends to 3Sum, 4Sum, and beyond."
//                 gradient="from-orange-50 to-red-50"
//               />
//               <TechniqueItem 
//                 technique="Caching & Memoization" 
//                 description="Store results of expensive computations to avoid recalculation. Essential for optimizing recursive algorithms."
//                 gradient="from-violet-50 to-purple-50"
//               />
//             </div>
//           </ContentCard>
//         </div>
//       ),

//       trees: (
//         <div className="space-y-6">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//             <IconComponent className="w-8 h-8 text-white" />
//           </div>
          
//           <ContentCard icon={ShieldQuestion} title="Core Concepts">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 Trees represent hierarchical relationships with a root node and child nodes. Binary Trees (max two children) and Binary Search Trees (ordered children) are fundamental. Understanding traversal is crucial: BFS explores level-by-level, while DFS explores branch-by-branch.
//               </p>
//               <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
//                 <p className="text-gray-700 font-medium">🌳 Tree Wisdom: Most tree problems have elegant recursive solutions. Think recursively, implement iteratively when needed!</p>
//               </div>
//             </div>
//           </ContentCard>

//           <ContentCard icon={Code} title="Traversal Mastery">
//             <div className="space-y-4">
//               <TechniqueItem 
//                 technique="Depth-First Search (DFS)" 
//                 description="In-order (left, root, right), Pre-order (root, left, right), Post-order (left, right, root). Each serves different purposes."
//                 gradient="from-orange-50 to-red-50"
//               />
//               <TechniqueItem 
//                 technique="Breadth-First Search (BFS)" 
//                 description="Level-order traversal using a queue. Perfect for finding shortest paths, level-based operations, and tree serialization."
//                 gradient="from-blue-50 to-cyan-50"
//               />
//               <TechniqueItem 
//                 technique="Recursive Thinking" 
//                 description="Break down tree problems into smaller subproblems. Define base cases and recursive cases clearly."
//                 gradient="from-purple-50 to-violet-50"
//               />
//             </div>
//           </ContentCard>
//         </div>
//       ),

//       dynamic: (
//         <div className="space-y-6">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//             <IconComponent className="w-8 h-8 text-white" />
//           </div>
          
//           <ContentCard icon={ShieldQuestion} title="Core Concepts">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 Dynamic Programming is an optimization technique that solves complex problems by breaking them into simpler, overlapping subproblems. By storing solutions to subproblems, we avoid redundant calculations and achieve dramatic performance improvements.
//               </p>
//               <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
//                 <p className="text-gray-700 font-medium">⚡ DP Magic: Transform exponential time complexity to polynomial by remembering what you've computed!</p>
//               </div>
//             </div>
//           </ContentCard>

//           <ContentCard icon={Code} title="DP Approaches">
//             <div className="space-y-4">
//               <TechniqueItem 
//                 technique="Memoization (Top-Down)" 
//                 description="Start from the main problem and recursively break it down, caching results along the way. Natural and intuitive approach."
//                 gradient="from-yellow-50 to-orange-50"
//               />
//               <TechniqueItem 
//                 technique="Tabulation (Bottom-Up)" 
//                 description="Start from the base cases and build up to the final solution iteratively. Often more space-efficient and avoids recursion overhead."
//                 gradient="from-green-50 to-emerald-50"
//               />
//             </div>
//           </ContentCard>
//         </div>
//       ),

//       search: (
//         <div className="space-y-6">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//             <IconComponent className="w-8 h-8 text-white" />
//           </div>
          
//           <ContentCard icon={ShieldQuestion} title="Core Concepts">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 This category focuses on efficient searching and sorting algorithms. Binary Search stands out as the most critical pattern - a powerful "divide and conquer" strategy that works on sorted collections to find elements in logarithmic time.
//               </p>
//               <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
//                 <p className="text-gray-700 font-medium">🎯 Search Secret: Binary search isn't just for finding elements - it's a powerful technique for finding answers in solution spaces!</p>
//               </div>
//             </div>
//           </ContentCard>

//           <ContentCard icon={Code} title="Search & Sort Techniques">
//             <div className="space-y-4">
//               <TechniqueItem 
//                 technique="Binary Search" 
//                 description="Halve the search space in each step by comparing with the middle element. Works on any monotonic function, not just sorted arrays."
//                 gradient="from-indigo-50 to-purple-50"
//               />
//               <TechniqueItem 
//                 technique="Sorting Algorithms" 
//                 description="Understand trade-offs: Merge Sort (stable, O(n log n)), Quick Sort (in-place, average O(n log n)), and when to use each."
//                 gradient="from-blue-50 to-indigo-50"
//               />
//             </div>
//           </ContentCard>
//         </div>
//       ),

//       twoptr: (
//         <div className="space-y-6">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//             <IconComponent className="w-8 h-8 text-white" />
//           </div>
          
//           <ContentCard icon={ShieldQuestion} title="Core Concepts">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 Two Pointers is one of the most versatile patterns in programming. By using two indices to traverse data structures, we can often reduce time complexity from O(n²) to O(n) while maintaining O(1) space complexity. It's elegantly simple yet incredibly powerful.
//               </p>
//               <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
//                 <p className="text-gray-700 font-medium">👥 Pointer Power: Two pointers can solve problems involving pairs, triplets, palindromes, and cycle detection!</p>
//               </div>
//             </div>
//           </ContentCard>

//           <ContentCard icon={Code} title="Pointer Variations">
//             <div className="space-y-4">
//               <TechniqueItem 
//                 technique="Opposite Ends" 
//                 description="Pointers start at the beginning and end, moving toward each other. Perfect for finding pairs, reversing, or checking palindromes."
//                 gradient="from-pink-50 to-rose-50"
//               />
//               <TechniqueItem 
//                 technique="Fast & Slow (Floyd's)" 
//                 description="Pointers move at different speeds. The slow pointer moves one step while the fast moves two. Excellent for cycle detection in linked lists."
//                 gradient="from-cyan-50 to-blue-50"
//               />
//             </div>
//           </ContentCard>
//         </div>
//       ),

//       sliding: (
//         <div className="space-y-6">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//             <IconComponent className="w-8 h-8 text-white" />
//           </div>
          
//           <ContentCard icon={ShieldQuestion} title="Core Concepts">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 The Sliding Window pattern creates a "window" (subarray or substring) that slides through data to efficiently find contiguous sections satisfying given conditions. It eliminates the need for nested loops, transforming O(n²) solutions into O(n) masterpieces.
//               </p>
//               <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
//                 <p className="text-gray-700 font-medium">🪟 Window Wisdom: Think of it as a dynamic frame that expands and contracts based on your problem's constraints!</p>
//               </div>
//             </div>
//           </ContentCard>

//           <ContentCard icon={Code} title="Window Variations">
//             <div className="space-y-4">
//               <TechniqueItem 
//                 technique="Fixed Size Window" 
//                 description="The window size remains constant as it slides through the data. Great for problems asking for results in exactly K elements."
//                 gradient="from-teal-50 to-cyan-50"
//               />
//               <TechniqueItem 
//                 technique="Dynamic Size Window" 
//                 description="The window grows and shrinks based on conditions. Perfect for finding the longest/shortest subarray meeting certain criteria."
//                 gradient="from-emerald-50 to-teal-50"
//               />
//             </div>
//           </ContentCard>
//         </div>
//       ),

//       backtrack: (
//         <div className="space-y-6">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//             <IconComponent className="w-8 h-8 text-white" />
//           </div>
          
//           <ContentCard icon={ShieldQuestion} title="Core Concepts">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 Backtracking is a refined brute-force technique that builds solutions incrementally. When a path doesn't lead to a valid solution, it intelligently "backtracks" to try alternative paths. It's the go-to approach for constraint satisfaction problems.
//               </p>
//               <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-400">
//                 <p className="text-gray-700 font-medium">🔄 Backtrack Mantra: "Choose, Explore, Unchoose" - this three-step dance solves most combinatorial problems!</p>
//               </div>
//             </div>
//           </ContentCard>

//           <ContentCard icon={Target} title="The Sacred Mantra">
//             <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border-2 border-violet-200">
//               <div className="text-center">
//                 <h4 className="text-2xl font-bold text-violet-800 mb-4">Choose → Explore → Unchoose</h4>
//                 <p className="text-gray-700 leading-relaxed">
//                   This framework is your key to solving permutations, combinations, subsets, and constraint satisfaction problems. 
//                   Make a choice, explore its consequences, then undo the choice to try alternatives.
//                 </p>
//               </div>
//             </div>
//           </ContentCard>
//         </div>
//       ),

//       heap: (
//         <div className="space-y-6">
//           <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//             <IconComponent className="w-8 h-8 text-white" />
//           </div>
          
//           <ContentCard icon={ShieldQuestion} title="Core Concepts">
//             <div className="space-y-4">
//               <p className="text-gray-700 leading-relaxed">
//                 A Heap is a specialized tree-based data structure that maintains the heap property (parent-child ordering). It's the backbone of Priority Queues, enabling efficient retrieval of minimum or maximum elements in O(log n) time.
//               </p>
//               <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
//                 <p className="text-gray-700 font-medium">⛰️ Heap Heights: Heaps excel when you need the "best" element repeatedly - think of them as your personal assistant for priority management!</p>
//               </div>
//             </div>
//           </ContentCard>

//           <ContentCard icon={Code} title="Heap Applications">
//             <div className="space-y-4">
//               <TechniqueItem 
//                 technique="Top K Elements" 
//                 description="Find the K largest/smallest elements efficiently using a min/max heap. Essential for ranking and selection problems."
//                 gradient="from-emerald-50 to-teal-50"
//               />
//               <TechniqueItem 
//                 technique="Running Median" 
//                 description="Use two heaps (max-heap for smaller half, min-heap for larger half) to find median in a stream of numbers."
//                 gradient="from-blue-50 to-cyan-50"
//               />
//               <TechniqueItem 
//                 technique="Dijkstra's Algorithm" 
//                 description="Use a min-heap to efficiently implement shortest path algorithms by always processing the closest unvisited node."
//                 gradient="from-purple-50 to-violet-50"
//               />
//             </div>
//           </ContentCard>
//         </div>
//       )
//     };

//     return content[nodeId] || (
//       <div className="space-y-6 text-center">
//         <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colorGradient} rounded-xl mb-4 shadow-lg`}>
//           <IconComponent className="w-8 h-8 text-white" />
//         </div>
//         <ContentCard icon={ShieldQuestion} title="Coming Soon!">
//           <p className="text-gray-600 text-lg">
//             Detailed content for <span className="font-semibold capitalize text-gray-800">{nodeId}</span> is being crafted with love. 
//             This pattern will cover essential techniques and concepts to master this topic!
//           </p>
//         </ContentCard>
//       </div>
//     );
//   };

//   const nodeList = [
//     { id: 'root', label: 'DSA Patterns', icon: Brain },
//     { id: 'arrays', label: 'Arrays & Strings', icon: Layers },
//     { id: 'hashing', label: 'Hash Tables', icon: Hash },
//     { id: 'trees', label: 'Trees & Graphs', icon: TreePine },
//     { id: 'dynamic', label: 'Dynamic Programming', icon: Zap },
//     { id: 'search', label: 'Search & Sort', icon: Search },
//     { id: 'twoptr', label: 'Two Pointers', icon: Users },
//     { id: 'sliding', label: 'Sliding Window', icon: Mountain },
//     { id: 'backtrack', label: 'Backtracking', icon: RotateCcw },
//     { id: 'heap', label: 'Heaps & Priority Queues', icon: Mountain }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Navigation */}
//         <div className="mb-8">
//           <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
//             <div className="flex flex-wrap gap-2">
//               {nodeList.map(({ id, label, icon: Icon }) => (
//                 <button
//                   key={id}
//                   onClick={() => setSelectedNode(id)}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all transform hover:scale-105 ${
//                     selectedNode === id
//                       ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span className="text-sm">{label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
//           {getDetailedNodeContent(selectedNode)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatternShowcase;



import React from 'react';
import { Github, ShieldQuestion, Code, BookOpen, Lightbulb, Target, ChevronRight, ExternalLink, Zap, TrendingUp, Star, Award } from "lucide-react";

export function getDetailedNodeContent(nodeId) {
    const ContentCard = ({ icon: Icon, title, children, bgColor = "bg-gradient-to-br from-white to-gray-50", borderColor = "border-gray-200" }) => (
        <div className={`${bgColor} rounded-xl p-6 shadow-lg border ${borderColor} mb-6`}>
            <h3 className="font-bold text-gray-800 flex items-center gap-3 mb-4 text-lg">
                <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                </div>
                {title}
            </h3>
            {children}
        </div>
    );

    const TechniqueItem = ({ technique, description, gradient = "from-blue-50 to-indigo-50" }) => (
        <div className={`bg-gradient-to-r ${gradient} rounded-lg p-4 border-l-4 border-blue-500 mb-3 transition-all hover:shadow-md hover:scale-[1.01]`}>
            <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                    <span className="font-semibold text-gray-800">{technique}:</span>
                    <p className="text-gray-600 mt-1 leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );

    const ProTip = ({ children, color = "blue" }) => {
        const colors = {
            blue: "bg-blue-50 border-blue-400 text-blue-800",
            green: "bg-green-50 border-green-400 text-green-800",
            purple: "bg-purple-50 border-purple-400 text-purple-800",
            orange: "bg-orange-50 border-orange-400 text-orange-800",
            teal: "bg-teal-50 border-teal-400 text-teal-800"
        };
        return (
            <div className={`${colors[color]} p-4 rounded-lg border-l-4 mt-4`}>
                <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p className="font-medium leading-relaxed">{children}</p>
                </div>
            </div>
        );
    };

    const content = {
        root: (
            <div className="space-y-6">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-xl">
                        <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Master DSA Patterns</h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Transform your coding skills by mastering these fundamental patterns. Each pattern is a key that unlocks hundreds of similar problems.
                    </p>
                </div>
                
                <ContentCard 
                    icon={Target} 
                    title="Why Pattern-Based Learning?" 
                    bgColor="bg-gradient-to-br from-purple-50 to-pink-50" 
                    borderColor="border-purple-200"
                >
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Instead of memorizing hundreds of solutions, learn the underlying techniques that solve entire classes of problems. 
                            This approach builds intuition and helps you tackle new problems confidently.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                                <Star className="w-6 h-6 text-yellow-500 mb-2" />
                                <h4 className="font-semibold text-gray-800 mb-2">Pattern Recognition</h4>
                                <p className="text-gray-600 text-sm">Learn to identify which pattern applies to new problems instantly</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm">
                                <TrendingUp className="w-6 h-6 text-green-500 mb-2" />
                                <h4 className="font-semibold text-gray-800 mb-2">Exponential Growth</h4>
                                <p className="text-gray-600 text-sm">Master one pattern, solve dozens of related problems</p>
                            </div>
                        </div>
                    </div>
                </ContentCard>

                <div className="text-center">
                    <a 
                        href="https://github.com/satyam0777/DSA-Placement/tree/main" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl hover:from-gray-800 hover:to-gray-600 transition-all transform hover:scale-105 shadow-lg font-semibold"
                    >
                        <Github className="w-6 h-6" /> 
                        <span>Explore Complete Repository</span>
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>
        ),

        arrays: (
            <div className="space-y-6">
                <ContentCard icon={ShieldQuestion} title="Foundation of Computing">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Arrays store elements in contiguous memory locations, providing lightning-fast O(1) access by index. 
                            This contiguous storage makes sequential iteration extremely efficient due to CPU cache locality benefits.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Key Insight:</strong> Strings are essentially immutable arrays of characters, so most array techniques 
                            directly apply to string manipulation problems.
                        </p>
                        <ProTip color="blue">
                            Array problems often have multiple solutions with different time-space tradeoffs. Always consider if you can 
                            trade O(1) space for O(n) time or vice versa.
                        </ProTip>
                    </div>
                </ContentCard>

                <ContentCard icon={Code} title="Essential Techniques" bgColor="bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="space-y-4">
                        <TechniqueItem 
                            technique="Two Pointers" 
                            description="Use two indices to traverse the array, often from opposite ends or at different speeds. Perfect for finding pairs, checking palindromes, or removing duplicates in O(n) time with O(1) space."
                            gradient="from-blue-50 to-cyan-50"
                        />
                        <TechniqueItem 
                            technique="Sliding Window" 
                            description="Maintain a dynamic subarray that expands and contracts based on conditions. Transforms nested loop problems (O(n²)) into single-pass solutions (O(n)). Ideal for subarray optimization problems."
                            gradient="from-green-50 to-emerald-50"
                        />
                        <TechniqueItem 
                            technique="Prefix Sum" 
                            description="Pre-calculate cumulative sums to answer range sum queries in O(1) time after O(n) preprocessing. Extends to prefix XOR, prefix products, and 2D prefix sums for matrix problems."
                            gradient="from-purple-50 to-violet-50"
                        />
                        <TechniqueItem 
                            technique="Dutch National Flag" 
                            description="Partition arrays into three sections using two pointers. Classic for sorting arrays with three distinct values or colors in a single pass."
                            gradient="from-orange-50 to-red-50"
                        />
                    </div>
                </ContentCard>
            </div>
        ),

        hashing: (
            <div className="space-y-6">
                <ContentCard icon={ShieldQuestion} title="The Speed Multiplier">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Hash Tables use hash functions to map keys to array indices, providing average-case O(1) time complexity 
                            for insertions, deletions, and lookups. They're the secret weapon for transforming slow algorithms into fast ones.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Trade-off:</strong> Exchange space for time. Most O(n²) brute force solutions can be optimized 
                            to O(n) using hash tables by storing what you've seen.
                        </p>
                        <ProTip color="green">
                            When you find yourself writing nested loops to search for something you've seen before, 
                            think hash table! The pattern is: "For each element, check if its complement exists."
                        </ProTip>
                    </div>
                </ContentCard>

                <ContentCard icon={Code} title="Power Patterns" bgColor="bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="space-y-4">
                        <TechniqueItem 
                            technique="Frequency Counting" 
                            description="Track occurrences of elements to solve anagram detection, character permutations, and duplicate finding. The foundation for many string and array problems."
                            gradient="from-green-50 to-emerald-50"
                        />
                        <TechniqueItem 
                            technique="Two-Sum Pattern" 
                            description="For each element X, check if 'target - X' exists in the hash map. This pattern extends to 3Sum, 4Sum, and complex combination problems. Store elements as you iterate."
                            gradient="from-orange-50 to-red-50"
                        />
                        <TechniqueItem 
                            technique="Sliding Window with HashMap" 
                            description="Combine sliding window with frequency maps to handle complex substring problems with conditions like 'at most K distinct characters' or 'longest substring without repeating characters'."
                            gradient="from-purple-50 to-violet-50"
                        />
                        <TechniqueItem 
                            technique="Memoization" 
                            description="Store results of expensive function calls to avoid recalculation. Essential for optimizing recursive algorithms and dynamic programming solutions."
                            gradient="from-blue-50 to-cyan-50"
                        />
                    </div>
                </ContentCard>
            </div>
        ),

        trees: (
            <div className="space-y-6">
                <ContentCard icon={ShieldQuestion} title="Hierarchical Thinking">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Trees represent hierarchical relationships with a root node and child nodes. They naturally model 
                            recursive problems and are fundamental to many algorithms and data structures.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Key Types:</strong> Binary Trees (≤2 children), Binary Search Trees (ordered), N-ary trees, 
                            and specialized trees like Heaps, Tries, and Segment Trees.
                        </p>
                        <ProTip color="orange">
                            Most tree problems have elegant recursive solutions. Think: "What do I do at this node, 
                            and how do I combine results from my children?" Always define your base case first!
                        </ProTip>
                    </div>
                </ContentCard>

                <ContentCard icon={Code} title="Traversal Mastery" bgColor="bg-gradient-to-br from-orange-50 to-red-50">
                    <div className="space-y-4">
                        <TechniqueItem 
                            technique="Depth-First Search (DFS)" 
                            description="Three flavors: In-order (left→root→right) gives sorted order in BST, Pre-order (root→left→right) for tree copying, Post-order (left→right→root) for deletion and calculations."
                            gradient="from-orange-50 to-red-50"
                        />
                        <TechniqueItem 
                            technique="Breadth-First Search (BFS)" 
                            description="Level-order traversal using a queue. Perfect for finding shortest paths, calculating tree width, level-based operations, and tree serialization."
                            gradient="from-blue-50 to-cyan-50"
                        />
                        <TechniqueItem 
                            technique="Tree DP" 
                            description="Dynamic programming on trees. Calculate answers for subtrees and combine them. Classic examples: tree diameter, maximum path sum, and subtree problems."
                            gradient="from-purple-50 to-violet-50"
                        />
                        <TechniqueItem 
                            technique="Tree Construction" 
                            description="Build trees from traversals, serialize/deserialize trees, and validate tree properties. Understanding how trees are represented is crucial for many problems."
                            gradient="from-green-50 to-emerald-50"
                        />
                    </div>
                </ContentCard>
            </div>
        ),

        dynamic: (
            <div className="space-y-6">
                <ContentCard icon={Zap} title="Optimization Through Memory">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Dynamic Programming solves complex problems by breaking them into simpler, overlapping subproblems. 
                            By storing solutions, we avoid redundant calculations and achieve dramatic performance improvements.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Recognition:</strong> Look for problems with optimal substructure (optimal solution contains 
                            optimal solutions to subproblems) and overlapping subproblems (same subproblems solved multiple times).
                        </p>
                        <ProTip color="purple">
                            DP Formula: Identify states → Define recurrence relation → Handle base cases → Optimize space. 
                            Start with recursive solution, add memoization, then convert to iterative if needed.
                        </ProTip>
                    </div>
                </ContentCard>

                <ContentCard icon={Code} title="DP Strategies" bgColor="bg-gradient-to-br from-yellow-50 to-orange-50">
                    <div className="space-y-4">
                        <TechniqueItem 
                            technique="Memoization (Top-Down)" 
                            description="Start from the main problem and recursively break it down, caching results in a hash map or array. Natural approach that follows problem thinking but may have recursion overhead."
                            gradient="from-yellow-50 to-orange-50"
                        />
                        <TechniqueItem 
                            technique="Tabulation (Bottom-Up)" 
                            description="Start from base cases and build up to the final solution iteratively using a DP table. Often more space-efficient and avoids recursion stack limitations."
                            gradient="from-green-50 to-emerald-50"
                        />
                        <TechniqueItem 
                            technique="Space Optimization" 
                            description="Many DP solutions only need the previous row/column of the table. Use rolling arrays or variables to reduce O(n²) space to O(n) or even O(1)."
                            gradient="from-blue-50 to-cyan-50"
                        />
                        <TechniqueItem 
                            technique="State Compression" 
                            description="Use bitmasks to represent states efficiently when dealing with subsets or boolean states. Common in problems involving visiting cities, selecting items, or toggling switches."
                            gradient="from-purple-50 to-violet-50"
                        />
                    </div>
                </ContentCard>
            </div>
        ),

        search: (
            <div className="space-y-6">
                <ContentCard icon={ShieldQuestion} title="Finding Needles in Haystacks">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Search algorithms efficiently locate specific elements or determine optimal solutions. Binary Search 
                            stands out as the most versatile pattern - it's not just for sorted arrays!
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Binary Search Insight:</strong> Works on any monotonic function where you can determine 
                            if you're too high or too low. Use it to search answer spaces, not just sorted arrays.
                        </p>
                        <ProTip color="teal">
                            Binary search template: while (left &lt; right) → Always converges. Think about invariants: 
                            what properties does your search space maintain?
                        </ProTip>
                    </div>
                </ContentCard>

                <ContentCard icon={Code} title="Search Techniques" bgColor="bg-gradient-to-br from-indigo-50 to-purple-50">
                    <div className="space-y-4">
                        <TechniqueItem 
                            technique="Binary Search on Arrays" 
                            description="Classic O(log n) search in sorted arrays. Variations include finding first/last occurrence, searching in rotated arrays, and finding peak elements."
                            gradient="from-indigo-50 to-purple-50"
                        />
                        <TechniqueItem 
                            technique="Binary Search on Answer" 
                            description="When answer lies in a range and you can verify if a value works, binary search the answer space. Common in optimization problems: 'minimum maximum' or 'maximum minimum'."
                            gradient="from-green-50 to-emerald-50"
                        />
                        <TechniqueItem 
                            technique="Sorting Fundamentals" 
                            description="Merge Sort (stable, O(n log n), good for external sorting), Quick Sort (in-place, average O(n log n)), Heap Sort (O(n log n) worst case). Know when to use each."
                            gradient="from-blue-50 to-cyan-50"
                        />
                        <TechniqueItem 
                            technique="Custom Comparators" 
                            description="Define custom sorting logic for complex objects. Essential for interval problems, string sorting by length, and multi-criteria sorting."
                            gradient="from-orange-50 to-red-50"
                        />
                    </div>
                </ContentCard>
            </div>
        ),

        twoptr: (
            <div className="space-y-6">
                <ContentCard icon={ShieldQuestion} title="Double the Power">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Two Pointers is one of the most elegant patterns in programming. By using two indices strategically, 
                            we can solve complex problems with linear time complexity and constant space.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Universal Power:</strong> Reduces O(n²) nested loop solutions to O(n) single-pass solutions. 
                            Works on arrays, strings, linked lists, and even conceptual spaces.
                        </p>
                        <ProTip color="blue">
                            Two pointers work when you can make progress by moving one pointer based on some condition. 
                            The key insight: moving pointers eliminates possibilities, making the search efficient.
                        </ProTip>
                    </div>
                </ContentCard>

                <ContentCard icon={Code} title="Pointer Strategies" bgColor="bg-gradient-to-br from-pink-50 to-rose-50">
                    <div className="space-y-4">
                        <TechniqueItem 
                            technique="Opposite Direction" 
                            description="Pointers start at opposite ends and move toward each other. Perfect for pair finding (Two Sum in sorted array), palindrome checking, and container with most water problems."
                            gradient="from-pink-50 to-rose-50"
                        />
                        <TechniqueItem 
                            technique="Same Direction (Fast & Slow)" 
                            description="Both pointers move in the same direction at different speeds. Floyd's cycle detection, finding middle of linked list, and removing duplicates. Also called 'tortoise and hare'."
                            gradient="from-cyan-50 to-blue-50"
                        />
                        <TechniqueItem 
                            technique="Sliding Window Pointers" 
                            description="Left and right pointers define a window that slides through the data. The window expands (move right) or contracts (move left) based on conditions."
                            gradient="from-green-50 to-emerald-50"
                        />
                        <TechniqueItem 
                            technique="Partition Pointers" 
                            description="Use pointers to partition arrays around pivot elements. Essential for quicksort, Dutch national flag problem, and moving zeros to end."
                            gradient="from-purple-50 to-violet-50"
                        />
                    </div>
                </ContentCard>
            </div>
        ),

        sliding: (
            <div className="space-y-6">
                <ContentCard icon={ShieldQuestion} title="Dynamic Windows of Opportunity">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Sliding Window creates a dynamic "frame" that moves through data to efficiently find optimal 
                            contiguous sections. It's like having a smart magnifying glass that resizes based on what you're looking for.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Efficiency Boost:</strong> Transforms O(n³) or O(n²) brute force solutions into O(n) 
                            linear solutions by avoiding redundant calculations when the window moves.
                        </p>
                        <ProTip color="teal">
                            Sliding window works when the problem asks for contiguous elements and you can maintain 
                            some information about the current window (sum, count, max, etc.) as it slides.
                        </ProTip>
                    </div>
                </ContentCard>

                <ContentCard icon={Code} title="Window Variations" bgColor="bg-gradient-to-br from-teal-50 to-cyan-50">
                    <div className="space-y-4">
                        <TechniqueItem 
                            technique="Fixed Size Window" 
                            description="Window size remains constant as it slides. Perfect for problems asking about exactly K elements: maximum sum of K elements, average of K elements, or K-distinct character windows."
                            gradient="from-teal-50 to-cyan-50"
                        />
                        <TechniqueItem 
                            technique="Variable Size Window" 
                            description="Window grows and shrinks based on conditions. Use two pointers: expand right when possible, contract left when necessary. Great for 'longest/shortest subarray with condition'."
                            gradient="from-emerald-50 to-green-50"
                        />
                        <TechniqueItem 
                            technique="String Pattern Matching" 
                            description="Use sliding window with hash maps to find anagrams, permutations, or patterns in strings. Track character frequencies in current window and compare with target."
                            gradient="from-purple-50 to-violet-50"
                        />
                        <TechniqueItem 
                            technique="Multiple Windows" 
                            description="Sometimes you need multiple sliding windows or a window that 'jumps' to new positions. Advanced technique for complex optimization problems."
                            gradient="from-orange-50 to-red-50"
                        />
                    </div>
                </ContentCard>
            </div>
        ),

        backtrack: (
            <div className="space-y-6">
                <ContentCard icon={ShieldQuestion} title="Systematic Exploration">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Backtracking is intelligent brute force - it builds solutions incrementally and abandons 
                            ("backtracks from") partial solutions that cannot lead to a complete solution.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>When to Use:</strong> Constraint satisfaction problems, finding all solutions 
                            (not just optimal), combinatorial problems like permutations, combinations, and puzzles.
                        </p>
                        <ProTip color="purple">
                            Backtracking template: Make a choice → Explore consequences → Undo choice → Try next option. 
                            Always think about what constitutes a "choice" in your problem space.
                        </ProTip>
                    </div>
                </ContentCard>

                <ContentCard icon={Award} title="The Sacred Algorithm" bgColor="bg-gradient-to-br from-violet-50 to-purple-50">
                    <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-8 rounded-2xl border-2 border-violet-300 shadow-lg">
                        <div className="text-center">
                            <h4 className="text-3xl font-bold text-violet-800 mb-6">Choose → Explore → Unchoose</h4>
                            <div className="space-y-4 text-left">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <span className="font-bold text-violet-700">Choose:</span>
                                    <span className="text-gray-700 ml-2">Make a decision (add element, place queen, etc.)</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <span className="font-bold text-violet-700">Explore:</span>
                                    <span className="text-gray-700 ml-2">Recursively explore this path</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <span className="font-bold text-violet-700">Unchoose:</span>
                                    <span className="text-gray-700 ml-2">Undo the choice to try alternatives</span>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4 italic">
                                This three-step dance solves permutations, combinations, N-Queens, Sudoku, and countless other problems!
                            </p>
                        </div>
                    </div>
                </ContentCard>
            </div>
        ),

        heap: (
            <div className="space-y-6">
                <ContentCard icon={ShieldQuestion} title="Priority Management">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Heaps are specialized binary trees that maintain parent-child ordering (heap property). 
                            They're the engine behind Priority Queues, enabling efficient access to minimum or maximum elements.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Key Operations:</strong> Insert O(log n), Extract-min/max O(log n), Peek O(1). 
                            Perfect for problems requiring repeated access to extreme values.
                        </p>
                        <ProTip color="green">
                            Think "heap" when you see "top K", "median", "merge K sorted", or any problem requiring 
                            efficient priority-based access. Heaps turn O(n²) problems into O(n log k) solutions.
                        </ProTip>
                    </div>
                </ContentCard>

                <ContentCard icon={Code} title="Heap Applications" bgColor="bg-gradient-to-br from-emerald-50 to-teal-50">
                    <div className="space-y-4">
                        <TechniqueItem 
                            technique="Top K Problems" 
                            description="Use a min-heap of size K to find K largest elements, or max-heap of size K for K smallest. Efficiently handles streaming data where you can't store everything."
                            gradient="from-emerald-50 to-teal-50"
                        />
                        <TechniqueItem 
                            technique="Running Median" 
                            description="Use two heaps: max-heap for smaller half, min-heap for larger half. Balance the heaps to keep median at heap tops. Perfect for streaming data problems."
                            gradient="from-blue-50 to-cyan-50"
                        />
                        <TechniqueItem 
                            technique="Merge K Sorted Arrays" 
                            description="Use a min-heap to efficiently merge multiple sorted streams. Each heap element tracks value and source array. Time complexity: O(N log K) where N is total elements."
                            gradient="from-purple-50 to-violet-50"
                        />
                        <TechniqueItem 
                            technique="Graph Algorithms" 
                            description="Heaps power Dijkstra's shortest path and Prim's minimum spanning tree algorithms. They ensure you always process the most promising node/edge next."
                            gradient="from-orange-50 to-red-50"
                        />
                    </div>
                </ContentCard>
            </div>
        )
    };

    return content[nodeId] || (
        <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl mb-4 shadow-lg">
                <ShieldQuestion className="w-8 h-8 text-white" />
            </div>
            <ContentCard icon={ShieldQuestion} title="Coming Soon!">
                <div className="text-center">
                    <p className="text-gray-600 text-lg mb-4">
                        Detailed content for <span className="font-semibold capitalize text-gray-800">{nodeId}</span> is being crafted! 
                    </p>
                    <p className="text-gray-500">
                        This section will cover essential patterns, techniques, and insights to master this important topic.
                    </p>
                </div>
            </ContentCard>
        </div>
    );
}