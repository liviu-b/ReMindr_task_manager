export interface Task {
  id: string;
  title: string;
  completed: boolean;
  categoryId: string;
  dueDate?: Date;
  notes?: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}