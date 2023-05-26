import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  constructor(private taskService: TaskService, private formBuilder: FormBuilder){

  }

  addTitleForm = this.formBuilder.group({
    title: new FormControl(''),
    status: new FormControl(''),
  });

  onAddTitleFormSubmit() : void {
    const status = this.addTitleForm.value.status;
    const title = this.addTitleForm.value.title;
    if(status === null || title === null || title === undefined){
      // TODO: add form + input validation here.
      console.log('something went wrong, please check input and make sure they are valid');
    }else if(status === "pending"){
      this.taskService.addPendingTask(title);
    }else if(status === 'completed'){
      this.taskService.addCompletedTask(title);
    }else{
      console.log('option passed to title|status is wrong somehow.');
    }
  }

}
