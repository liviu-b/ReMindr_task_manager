import React, { useState } from 'react';
import { Category } from '../types';
import { Calendar } from 'lucide-react';
import { TaskInput } from './TaskForm/TaskInput';
import { TaskObservation } from './TaskForm/TaskObservation';

interface AddTaskFormProps {
  categories: Category[];
  onAddTask: (title: string, categoryId: string, notes: string, dueDate?: Date) => void;
}

export function AddTaskForm({ categories, onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '');
  const [notes, setNotes] = useState('');
  const [dueDate, setDueDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(
        title,
        categoryId,
        notes,
        dueDate ? new Date(dueDate) : undefined
      );
      setTitle('');
      setNotes('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <TaskInput
          value={title}
          onChange={setTitle}
          placeholder="Add a new task..."
          className="flex-1"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
        >
          Add Task
        </button>
      </div>
      <TaskObservation value={notes} onChange={setNotes} />
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-500 dark:text-white" />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </div>
    </form>
  );
}