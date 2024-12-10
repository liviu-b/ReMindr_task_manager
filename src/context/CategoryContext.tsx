import React, { createContext, useContext, ReactNode } from 'react';
import { Category } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const defaultCategories: Category[] = [
  { id: '1', name: 'Personal', color: '#3B82F6' },
  { id: '2', name: 'Work', color: '#EF4444' },
  { id: '3', name: 'Shopping', color: '#10B981' },
];

interface CategoryContextType {
  categories: Category[];
  addCategory: (name: string, color: string) => void;
  deleteCategory: (categoryId: string) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useLocalStorage<Category[]>('categories', defaultCategories);

  const addCategory = (name: string, color: string) => {
    const newCategory: Category = {
      id: Math.random().toString(36).substring(2),
      name,
      color,
    };
    setCategories([...categories, newCategory]);
  };

  const deleteCategory = (categoryId: string) => {
    setCategories(categories.filter((category) => category.id !== categoryId));
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory, deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
};