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
    this.taskService.addPendingTask(title);
  }

  addCompletedTask(title: string = 'Completed Task') {
    this.taskService.addCompletedTask(title);
  }

  deletePendingTask(id: number) {
    this.taskService.deletePendingTask(id);
    this.pendingTasks = this.taskService.getPendingTasks();
  }

  deleteCompletedTask(id: number) {
    this.taskService.deleteCompletedTask(id);
    this.completedTasks = this.taskService.getCompletedTasks();
  }
  
  moveToCompletedTasks(id: number) {
    this.taskService.moveToCompletedTasks(id);
    this.pendingTasks = this.taskService.getPendingTasks();
  }

  moveToPendingTasks(id: number) {
    this.taskService.moveToPendingTasks(id);
    this.completedTasks = this.taskService.getCompletedTasks();
  }

}
