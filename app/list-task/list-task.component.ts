import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskSearchPipe } from '../task-search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, TaskSearchPipe],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent implements OnInit {
  tasks: any[] = [];
  searchTerm: string = '';
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.loadData();
  }

  onDelete(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(data => {
      alert("Task Deleted");
      this.loadData();

    })
  }

  loadData() {
    this.taskService.getTasks().subscribe((p: any) => {
      this.tasks = p;
    })
  }



}
