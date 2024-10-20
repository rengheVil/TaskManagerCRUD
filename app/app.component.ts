import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';
import { ListTaskComponent } from './list-task/list-task.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'ToDoList';

  

  
}
