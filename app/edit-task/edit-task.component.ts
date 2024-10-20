
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent implements OnInit{


  taskForm: FormGroup;
  // taskService: any;
  tasks: any;
  taskId: number;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router, private route: ActivatedRoute){
    
    const taskkid = this.route.snapshot.paramMap.get("id");
    this.taskId = Number(taskkid)
    
    this.taskForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      description: ['', ],
      dueDate:['',],
      priority: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.taskService.getTask(this.taskId).subscribe(data => {
      //data.dueDate = new Date(data.dueDate).toISOString().split(0,10);
      this.taskForm.patchValue(data);
    })
  }

  onSubmit(){
    
    const taskData = this.taskForm.value; 

    console.log(taskData)
    this.taskService.updateTask(taskData).subscribe(data =>{

      alert("Submitted")
      this.router.navigate(["/"]);
    })
  }

  cancel(){
    this.taskForm.reset();
  }


}
