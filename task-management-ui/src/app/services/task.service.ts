import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

private apiUrl = "https://task-management-api-0lxj.onrender.com/api";

constructor(private http: HttpClient) {}

login(data:any){
return this.http.post(`${this.apiUrl}/Auth/login`, data);
}

register(data:any){
return this.http.post(`${this.apiUrl}/Auth/register`, data);
}

getEmployees(){
return this.http.get(`${this.apiUrl}/Auth/employees`);
}

getTasks(): Observable<Task[]> {

const userId = localStorage.getItem("userId");
const role = localStorage.getItem("role");

if(role === "Employee"){
return this.http.get<Task[]>(`${this.apiUrl}/tasks?userId=${userId}`);
}

return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
}

// ⭐ NEW FUNCTION
getTaskById(id:number): Observable<Task>{
return this.http.get<Task>(`${this.apiUrl}/tasks/${id}`);
}

addTask(task:any){
return this.http.post(`${this.apiUrl}/Tasks`, task);
}

updateTask(id: number, task: Task): Observable<any> {
return this.http.put<any>(`${this.apiUrl}/tasks/${id}`, task);
}

deleteTask(id: number): Observable<any> {
return this.http.delete<any>(`${this.apiUrl}/tasks/${id}`);
}
getUsers(){
return this.http.get(`${this.apiUrl}/Auth/users`);
}

resetPassword(id:number,password:string){
return this.http.put(`${this.apiUrl}/Auth/reset-password/${id}`,{
newPassword:password
});
}

deleteUser(id:number){
return this.http.delete(`${this.apiUrl}/Auth/users/${id}`);
}

}