import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutingModule } from './todo-list-routing.modules';
import { FormsModule } from '@angular/forms';
import { TodoListInputComponent } from './todo-list-input/todo-list-input.component';
import { TodoListSectionComponent } from './todo-list-section/todo-list-section.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListInputComponent,
    TodoListSectionComponent,
    TodoListFooterComponent
  ],
  imports: [
    TodoListRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class TodoListModule { }
