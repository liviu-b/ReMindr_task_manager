import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { CategoryProvider } from './context/CategoryContext';
import { TaskManager } from './components/TaskManager';
import { BrainCircuit } from 'lucide-react';

export default function App() {
  return (
    <CategoryProvider>
      <TaskProvider>
        <div className="min-h-screen bg-gray-900">
          <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <BrainCircuit className="w-8 h-8 text-blue-500" />
                <h1 className="text-2xl sm:text-3xl font-bold text-white">ReMindr</h1>
              </div>
            </div>
            <TaskManager />
          </div>
        </div>
      </TaskProvider>
    </CategoryProvider>
  );
}