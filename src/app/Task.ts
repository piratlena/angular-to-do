export interface Task {
  id?: number;
  taskTitle: string;
  day: string;
  reminder: boolean;
  isFavorite?: boolean;
}
