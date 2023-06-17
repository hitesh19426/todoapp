import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPageComponent } from './edit-page/edit-page.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TaskFormComponent,
    EditPageComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
