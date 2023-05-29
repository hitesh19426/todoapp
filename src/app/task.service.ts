import { Injectable } from '@angular/core';
import Task from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Id to uniquely identify each task
  pendingId = 1;
  completedId = 2;

  // arrays to store tasks
  pendingTasks: Task[] = []
  completedTasks: Task[] = []

  constructor() { }

  addPendingTask(title: string): void {
    this.pendingTasks.push({ id: this.pendingId++, title: title, pending: true });
  }

  deletePendingTask(id: number): void {
    this.pendingTasks = this.pendingTasks.filter((task) => task.id !== id);
  }

  moveToCompletedTasks(id: number) {
    const task: Task | undefined = this.pendingTasks.find((task) => task.id === id);
    if (task === undefined) {
      console.log('something went wrong, not able to find the task for the given id');
      return;
    }

    this.deletePendingTask(task.id);
    this.addCompletedTask(task.title);
  }

  moveToPendingTasks(id: number) {
    const task: Task | undefined = this.completedTasks.find((task) => task.id === id);
    if (task === undefined) {
      console.log('something went wrong, not able to find the task for the given id');
      return;
    }

    this.deleteCompletedTask(task.id);
    this.addPendingTask(task.title);
  }

  getPendingTasks(): Task[] {
    return this.pendingTasks;
  }

  addCompletedTask(title: string): void {
    this.completedTasks.push({ id: this.completedId++, title: title, pending: false });
  }

  deleteCompletedTask(id: number): void {
    this.completedTasks = this.completedTasks.filter((task) => task.id !== id);
  }

  getCompletedTasks(): Task[] {
    return this.completedTasks;
  }

  editTaskTitle(id: number | undefined, newTitle: string | undefined) : void {
    if(id === undefined || newTitle === undefined){
      console.log('something went wrong. task cant be undefined');
      return;
    }

    this.pendingTasks.map((task) => {
      if(task.id === id){
        task.title = newTitle;
      }
    })
  }

}
