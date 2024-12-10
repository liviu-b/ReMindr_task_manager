import React from 'react';

interface TaskObservationProps {
  value: string;
  onChange: (value: string) => void;
}

export function TaskObservation({ value, onChange }: TaskObservationProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Add observations..."
      className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24 placeholder-gray-500 dark:placeholder-gray-400"
    />
  );
}