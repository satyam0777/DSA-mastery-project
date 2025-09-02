import { useState, useEffect, useMemo } from 'react';
import { getLeetCodeProblems } from '../data/problemData';

export function useProgressTracker(nodes) {
  const [completedProblems, setCompletedProblems] = useState(() => {
    try {
      const saved = localStorage.getItem('dsaCompletedProblems');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('dsaCompletedProblems', JSON.stringify(completedProblems));
  }, [completedProblems]);

  const totalProgress = useMemo(() => {
    const allProblems = nodes.map(node => getLeetCodeProblems(node.id)).flat();
    const uniqueProblems = [...new Set(allProblems.map(p => p.name))];
    const completedCount = Object.keys(completedProblems).filter(key => completedProblems[key]).length;
    return {
      total: uniqueProblems.length,
      completed: completedCount,
      percentage: uniqueProblems.length > 0 ? Math.round((completedCount / uniqueProblems.length) * 100) : 0
    };
  }, [completedProblems, nodes]);

  return { completedProblems, setCompletedProblems, totalProgress };
}