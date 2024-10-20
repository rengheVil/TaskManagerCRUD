import { Routes } from '@angular/router';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { EditTaskComponent} from './edit-task/edit-task.component';

export const routes: Routes = [
    {path: "", component:ListTaskComponent},
    {path: "add", component:AddTasksComponent},
    {path: "edit/:id", component:EditTaskComponent},
];
