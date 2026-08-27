export interface Task {
  id: number;
  taskName: string;
  taskStatus: string;
  deadLine: string; // Vem como string ISO do .NET
  description: string;
  done: boolean;
}