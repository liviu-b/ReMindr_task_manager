import React, { useState } from 'react';
import { AlignLeft, X } from 'lucide-react';

interface TaskNotePreviewProps {
  notes: string;
}

export function TaskNotePreview({ notes }: TaskNotePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!notes) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs text-gray-500 dark:text-white flex items-center hover:text-gray-700 dark:hover:text-gray-200"
      >
        <AlignLeft className="w-3 h-3 mr-1" />
        Notes
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Notes</h3>
            <div className="whitespace-pre-wrap text-gray-600 dark:text-white">
              {notes}
            </div>
          </div>
        </div>
      )}
    </>
  );
}