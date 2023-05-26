import { Component } from '@angular/core';
import Task from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  pendingTasks: Task[] = this.taskService.getPendingTasks();
  completedTasks: Task[] = this.taskService.getCompletedTasks();

  constructor(private taskService: TaskService){
    
  }

  addPendingTask(title: string = 'Pending Task') {
    console.log('add pending task called in component');
    this.pendingTasks = this.taskService.addPendingTask(title);
    console.log(this.pendingTasks);
    
  }

  addCompletedTask(title: string = 'Completed Task') {
    this.completedTasks = this.taskService.addCompletedTask(title);
  }

  deletePendingTask(id: number) {
    this.pendingTasks = this.taskService.deletePendingTask(id);
  }

  deleteCompletedTask(id: number) {
    this.completedTasks = this.taskService.deleteCompletedTask(id);
  }


}
