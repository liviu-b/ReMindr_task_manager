import React, { useState } from 'react';
import { ColorPicker } from './ColorPicker';

interface AddCategoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string, color: string) => void;
}

export function AddCategoryDialog({ isOpen, onClose, onAdd }: AddCategoryDialogProps) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#3B82F6');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim(), color);
      setName('');
      setColor('#3B82F6');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 dialog-overlay bg-black bg-opacity-50 flex items-center justify-center">
      <div className="dialog-content bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md animate-scale">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add Category</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Category name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-white">Color</label>
            <ColorPicker value={color} onChange={setColor} />
          </div>
          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="button-hover px-4 py-2 text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button-hover px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}