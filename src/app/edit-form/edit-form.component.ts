import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
  inputs: ['taskId', 'initialTaskTitle'],
})

export class EditFormComponent implements OnInit {

  @Input() taskId: number | undefined;
  @Input() initialTaskTitle: string | undefined;
  @Output() editTitle = new EventEmitter();

  editTitleForm = this.formBuilder.group({
    title: new FormControl(),
  })
  
  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {}

  // If you need to initialize some values using passed components, do that in ngOnInit method
  // and not in constructor. Its like react useEffects hook.
  ngOnInit(): void {
    this.editTitleForm.patchValue({
      title: this.initialTaskTitle,
    })
  }

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
