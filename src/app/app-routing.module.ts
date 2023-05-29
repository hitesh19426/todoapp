import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  {path: '', component: TodolistComponent},
  {path: 'about', component: EditFormComponent},
  {path: 'tasks/edit', component: EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
