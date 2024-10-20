import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

getTasks(){
  return  this.http.get("https://localhost:7191/api/TaskItems")
}

getTask(taskId : number){
  return  this.http.get("https://localhost:7191/api/TaskItems/" + taskId)
}

deleteTask(taskId : number){
  return this.http.delete("https://localhost:7191/api/TaskItems/" + taskId)
}

createTask(task: any){
  return this.http.post("https://localhost:7191/api/TaskItems",task)
}

updateTask(task: any){
  return this.http.put("https://localhost:7191/api/TaskItems/" + task.id, task)
}


} 

export interface Task{
  id:string,
  title:string,
  description:string,
  dueDate:Date,
  priority: string,
}