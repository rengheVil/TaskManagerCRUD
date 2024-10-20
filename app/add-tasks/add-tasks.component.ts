import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { provideToastr } from 'ngx-toastr';


@Component({
  selector: 'app-add-tasks',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss'
})
export class AddTasksComponent {

  taskForm: FormGroup;
  // taskService: any;
  tasks: any;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router){
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', ],
      dueDate:['',],
      priority: ['', [Validators.required]],
    })
  }

  onSubmit(taskData:any){
    console.log(taskData)
    this.taskService.createTask(taskData.value).subscribe(data =>{
      this.router.navigate(["/"]);
    })
  }

  cancel(){
    this.taskForm.reset();
  }


  // this.toastrService.error('everything is broken', 'Major Error', {
  //   timeOut: 3000,
  // });

  // onAddTask(){
  //   this.taskService.addTask().subscribe(() => {
  //     alert("Task added");
  //     })
  //   }
  }


