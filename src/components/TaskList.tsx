import React from 'react';
import { Task, Category } from '../types';
import { Check, Circle, Calendar, Pencil, Trash2 } from 'lucide-react';
import { TaskNotePreview } from './TaskNotePreview';

interface TaskListProps {
  tasks: Task[];
  categories: Category[];
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
}

export function TaskList({ tasks, categories, onToggleTask, onDeleteTask, onEditTask }: TaskListProps) {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          No tasks found. Add a new task to get started!
        </div>
      ) : (
        tasks.map((task) => {
          const category = categories.find((c) => c.id === task.categoryId);
          return (
            <div
              key={task.id}
              className="group bg-gray-800 rounded-lg p-4 task-item hover:bg-gray-700/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                <div className="flex items-start sm:items-center space-x-3">
                  <button
                    onClick={() => onToggleTask(task.id)}
                    className="task-action focus:outline-none mt-1 sm:mt-0"
                  >
                    {task.completed ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`break-words ${task.completed ? 'line-through opacity-70' : ''}`}>
                      {task.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      {category && (
                        <span
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ backgroundColor: category.color + '20', color: category.color }}
                        >
                          {category.name}
                        </span>
                      )}
                      {task.notes && <TaskNotePreview notes={task.notes} />}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {task.dueDate && (
                    <Calendar className="w-4 h-4 text-gray-300" />
                  )}
                  <button
                    onClick={() => onEditTask(task)}
                    className="p-1 rounded task-action"
                  >
                    <Pencil className="w-4 h-4 text-gray-300" />
                  </button>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="p-1 rounded task-action"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}