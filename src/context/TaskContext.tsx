import React, { createContext, useContext, ReactNode } from 'react';
import { Task } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { generateTaskId } from '../utils/taskUtils';

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, categoryId: string, notes: string, dueDate?: Date) => void;
  toggleTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const addTask = (title: string, categoryId: string, notes: string, dueDate?: Date) => {
    const newTask: Task = {
      id: generateTaskId(),
      title,
      completed: false,
      categoryId,
      notes,
      dueDate,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};