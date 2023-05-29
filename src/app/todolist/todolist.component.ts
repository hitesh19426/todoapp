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

  showEditForm: boolean = false;
  editTaskId: number | undefined = undefined;
  editTaskTitle: string | undefined = undefined;

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

  editTask(id: number | undefined){
    if(id === undefined){
      console.log('id cant be undefined.');
      return;
    }

    const task: Task | undefined = this.pendingTasks.find((task) => task.id === id);
    if(task === undefined){
      console.log('task cant be undefined. Something went wrong');
      return;
    }

    // console.log('task in edit title = ', task);

    this.editTaskTitle = task.title;
    this.editTaskId = id;
    this.showEditForm = true;
  }

  OnEditTitle() {
    this.pendingTasks = this.taskService.getPendingTasks();
    this.showEditForm = false;
  }

}
