import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Sua URL base retirada do Swagger (sem o /swagger/index.html)
  private apiUrl = 'http://localhost:5213/api/tasks'; 

  constructor(private http: HttpClient) { }

  // Listar todas as tarefas (GET)
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Se precisar atualizar o status (PUT/PATCH)
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
}