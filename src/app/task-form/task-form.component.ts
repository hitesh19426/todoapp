import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TaskService } from '../task.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  constructor(private taskService: TaskService, private formBuilder: FormBuilder) { }

  addTitleForm = this.formBuilder.group({
    title: new FormControl(''),
    status: new FormControl(''),
  });

  onAddTitleFormSubmit(): void {
    console.log('onAddTitleFormSUbmit function called');

    const status = this.addTitleForm.value.status;
    const title = this.addTitleForm.value.title;
    if (status === null || title === null || title === undefined) {
      // TODO: add form + input validation here.
      console.log('something went wrong, please check input and make sure they are valid');
    } else if (status === "pending") {
      console.log('adding pending task');
      this.taskService.addPendingTask(title);
    } else if (status === 'completed') {
      console.log('adding completed task');
      this.taskService.addCompletedTask(title);
    } else {
      console.log('option passed to title|status is wrong somehow.');
    }
  }

  addPendingTask(title: string = "Pending Task") {
    console.log('addPendingTask function called');
    this.taskService.addPendingTask(title);
  }

  addCompletedTask(title: string = "Completed Task") {
    this.taskService.addCompletedTask(title);
  }

  async addRandomTask() {
    console.log('called random task function');
    var randomWord: string | undefined = undefined;

    // TODO: Is there some way to do this using wait/async?
    // this.taskService.getRandomTitle().subscribe(res => {
    //   console.log('res = ', res);
    //   randomWord = res[0];

    //   if(randomWord === undefined){
    //     console.log('random word is undefined.');
    //     return;
    //   }

    //   console.log('random word = ', randomWord);
    //   this.taskService.addPendingTask(randomWord);
    //   console.log('pendingTasks = ', this.taskService.getPendingTasks());
    // });

    const res = await lastValueFrom(this.taskService.getRandomTitle());
    console.log('res = ', res);

    randomWord = res[0];
    if (randomWord === undefined) {
      console.log('random word is undefined.');
      return;
    }

    console.log('random word = ', randomWord);
    this.taskService.addPendingTask(randomWord);
    console.log('pendingTasks = ', this.taskService.getPendingTasks());
  }

}
