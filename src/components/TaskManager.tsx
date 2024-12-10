import React, { useState } from 'react';
import { Task } from '../types';
import { useTaskContext } from '../context/TaskContext';
import { useCategoryContext } from '../context/CategoryContext';
import { filterTasksByCategory } from '../utils/taskUtils';
import { TaskList } from './TaskList';
import { CategoryList } from './CategoryList';
import { AddTaskForm } from './AddTaskForm';
import { AddCategoryDialog } from './AddCategoryDialog';
import { EditTaskDialog } from './EditTaskDialog';
import { Menu, X } from 'lucide-react';

export function TaskManager() {
  const { tasks, addTask, toggleTask, deleteTask, updateTask } = useTaskContext();
  const { categories, addCategory, deleteCategory } = useCategoryContext();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredTasks = filterTasksByCategory(tasks, selectedCategoryId);

  return (
    <div className="relative">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed bottom-4 right-4 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 task-action"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`
          md:col-span-1
          fixed md:relative
          inset-0 md:inset-auto
          z-40 md:z-auto
          bg-gray-900 md:bg-transparent
          mobile-menu
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          p-4 md:p-0
        `}>
          <div className="bg-gray-800 rounded-xl p-4 shadow-sm">
            <CategoryList
              categories={categories}
              selectedCategoryId={selectedCategoryId}
              onSelectCategory={(categoryId) => {
                setSelectedCategoryId(categoryId);
                setIsMobileMenuOpen(false);
              }}
              onAddCategory={() => setIsAddCategoryOpen(true)}
              onDeleteCategory={deleteCategory}
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-gray-800 rounded-xl p-6 shadow-sm space-y-6">
            <AddTaskForm
              categories={categories}
              onAddTask={addTask}
            />
            <div className="h-px bg-gray-700" />
            <TaskList
              tasks={filteredTasks}
              categories={categories}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              onEditTask={setEditingTask}
            />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <AddCategoryDialog
        isOpen={isAddCategoryOpen}
        onClose={() => setIsAddCategoryOpen(false)}
        onAdd={addCategory}
      />
      <EditTaskDialog
        task={editingTask}
        categories={categories}
        onClose={() => setEditingTask(null)}
        onSave={updateTask}
      />
    </div>
  );
}