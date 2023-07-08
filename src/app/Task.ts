export interface Task {
  id?: number | null;
  taskTitle: string;
  day: string;
  reminder: boolean;
  isFavorite?: boolean;
}
