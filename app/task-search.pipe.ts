import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'taskSearch',
  standalone: true
})
export class TaskSearchPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(tasks: any[], searchTerm: string): any[] {
    
    
    if (!searchTerm) {
      return tasks;
    }
    return tasks.filter((task:any) =>{
     return task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.description.toLowerCase().includes(searchTerm.toLowerCase())
    }
      
    );
  }


}


