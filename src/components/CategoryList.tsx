import React from 'react';
import { Category } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface CategoryListProps {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  onAddCategory: () => void;
  onDeleteCategory: (categoryId: string) => void;
}

export function CategoryList({
  categories,
  selectedCategoryId,
  onSelectCategory,
  onAddCategory,
  onDeleteCategory,
}: CategoryListProps) {
  return (
    <div className="space-y-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 hover-lift text-gray-800 dark:text-white ${
          selectedCategoryId === null
            ? 'bg-gray-200 dark:bg-gray-700'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        All Tasks
      </button>
      {categories.map((category) => (
        <div
          key={category.id}
          className={`group hover-lift flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-300 text-gray-800 dark:text-white ${
            selectedCategoryId === category.id
              ? 'bg-gray-200 dark:bg-gray-700'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          <button
            onClick={() => onSelectCategory(category.id)}
            className="flex-1 flex items-center text-left"
          >
            <span
              className="inline-block w-3 h-3 rounded-full mr-2 transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: category.color }}
            />
            {category.name}
          </button>
          <button
            onClick={() => onDeleteCategory(category.id)}
            className="opacity-0 group-hover:opacity-100 transition-all duration-200 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded button-hover"
          >
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
      ))}
      <button
        onClick={onAddCategory}
        className="w-full flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg hover-lift"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Category
      </button>
    </div>
  );
}