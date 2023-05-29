import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})

export class EditFormComponent {

  @Input() taskId: number | undefined;
  @Input() initialTaskTitle: string | undefined;
  @Output() editTitle = new EventEmitter();
  
  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {
    this.taskId = undefined;
    this.initialTaskTitle = undefined;
  }

  editTitleForm = this.formBuilder.group({
    title: new FormControl(''),
  })

  onEditTitleFormSubmit(): void {
    const title = this.editTitleForm.value.title;
    if(title === undefined || title === null){
      console.log('something went wrong. title cant be undefined or null');
      return;
    }

    console.log(this.taskId);
    
    // this.tasks[this.editTaskId-1].title = newTitle;
    // you need to update the task with a particular id, not a particular index
    // so this approach would not work in general

    this.taskService.editTaskTitle(this.taskId, title);
    this.editTitle.emit();
    
    // this.tasks = this.taskService.getTaskList()
    // this.showEdit = false;
    console.log('successfully updated title');
  }

}
