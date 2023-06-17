import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  {path: '', component: TodolistComponent},
  {path: 'about', component: EditPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
