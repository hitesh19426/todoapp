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

constructor() {}

addPendingTask(title: string) : Task[] {
  this.pendingTasks.push({id: this.pendingId++, title: title, pending: true});
  return this.pendingTasks;
}

deletePendingTask(id: number) : Task[] {
  this.pendingTasks = this.pendingTasks.filter((task) => task.id !== id);
  return this.pendingTasks;
}

getPendingTasks(): Task[] {
  return this.pendingTasks;
}

addCompletedTask(title: string) : Task[] {
  this.completedTasks.push({id: this.completedId++, title: title, pending: false});
  return this.completedTasks;
}

deleteCompletedTask(id: number) : Task[] {
  this.completedTasks = this.completedTasks.filter((task) => task.id !== id);
  return this.completedTasks;
}

getCompletedTasks() : Task[] {
  return this.completedTasks;
}

}
