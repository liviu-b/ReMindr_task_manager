import { Task } from '../types';

export const filterTasksByCategory = (tasks: Task[], categoryId: string | null): Task[] => {
  return categoryId ? tasks.filter((task) => task.categoryId === categoryId) : tasks;
};

export const generateTaskId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};