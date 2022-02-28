import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IThing } from '../todo-list.dto';

@Component({
  selector: 'app-todo-list-section',
  templateUrl: './todo-list-section.component.html',
  styleUrls: ['./todo-list-section.component.scss']
})
export class TodoListSectionComponent implements OnInit {

  @Input() public todoList: IThing[] = [];
  @Output() public todoListChange = new EventEmitter<IThing[]>();
  
  constructor() { }

  public ngOnInit(): void { }

  public handleDelete(i: number): void {
    this.todoList.splice(i, 1)
    this.todoListChange.emit(this.todoList)
  }

  public handleTodoStatusChange(): void {
    this.todoListChange.emit(this.todoList)
  }
}
