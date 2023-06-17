import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent {

  taskId: number;
  initialTaskTitle: string | undefined = undefined;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.taskId = activatedRoute.snapshot.params['taskId'];
    const state = this.router.getCurrentNavigation()?.extras.state;
    console.log("state = ", state);

    if(state !== undefined){
      this.initialTaskTitle = state['initialTaskTitle'];
    }
    
  }
}
