

import React, { useState, useEffect } from "react";
import { fetchMindmap, fetchProgress, fetchUserProfile, fetchPatterns, fetchStats, updateProgress } from './api';
import LandingPage from './landingPage';
import Header from './components/Header';
import MindmapView from './components/MindmapView';
import ProgressView from './components/ProgressView';
import { useProgressTracker } from './hooks/useProgressTracker';
// import {node ,edge} from "./data/mindmapData";


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selected, setSelected] = useState('root');
  const [viewMode, setViewMode] = useState("mindmap");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [completedProblems, setCompletedProblems] = useState({});
  const [totalProgress, setTotalProgress] = useState({});
  const [userProfile, setUserProfile] = useState(null);
  const [patterns, setPatterns] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch all required data from backend
      fetchMindmap().then((mindmap) => {
        setNodes(mindmap);
        // Optionally set edges if your backend returns them
      });
      fetchProgress().then(setCompletedProblems);
      fetchUserProfile().then(setUserProfile);
      fetchPatterns().then(setPatterns);
      fetchStats().then(setStats);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    // Calculate total progress from completedProblems and nodes
    if (nodes.length && completedProblems) {
      const total = nodes.length;
      const completed = Object.keys(completedProblems).length;
      setTotalProgress(Math.round((completed / total) * 100));
    }
  }, [nodes, completedProblems]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setNodes([]);
    setEdges([]);
    setCompletedProblems({});
    setUserProfile(null);
    setPatterns([]);
    setStats({});
    localStorage.removeItem('token');
  };

  if (!isAuthenticated) {
    return <LandingPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-100 overflow-hidden">
      <style>{`
        .pulsate { animation: pulsate 2s infinite ease-in-out; }
        @keyframes pulsate { 
          0% { filter: drop-shadow(0 0 4px rgba(99, 102, 241, 0.4)); } 
          50% { filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.8)); } 
          100% { filter: drop-shadow(0 0 4px rgba(99, 102, 241, 0.4)); } 
        }
        .aurora-bg {
          position: absolute; inset: 0; overflow: hidden; background-color: #f1f5f9;
        }
        .aurora-bg::before {
          content: ''; position: absolute; top: 0; left: 0; width: 200%; height: 200%;
          background-image:
            radial-gradient(at 20% 30%, #dbeafe 0px, transparent 50%),
            radial-gradient(at 80% 10%, #ede9fe 0px, transparent 50%),
            radial-gradient(at 25% 90%, #fce7f3 0px, transparent 50%),
            radial-gradient(at 70% 80%, #fef3c7 0px, transparent 50%);
          animation: aurora 20s infinite linear;
        }
        @keyframes aurora {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <Header 
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalProgress={totalProgress}
        onLogout={handleLogout}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <main className="flex-1 overflow-hidden">
        {viewMode === "mindmap" && (
          <MindmapView 
            nodes={nodes}
            edges={edges}
            selected={selected}
            setSelected={setSelected}
            completedProblems={completedProblems}
            setCompletedProblems={setCompletedProblems}
          />
        )}
        {viewMode === "progress" && (
          <ProgressView 
            nodes={nodes} 
            completedProblems={completedProblems} 
            totalProgress={totalProgress} 
          />
        )}
        {/* You can pass userProfile, patterns, stats to other components as needed */}
      </main>
    </div>
  );
}