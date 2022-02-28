import { Component, OnInit } from '@angular/core';

interface IThing {
  thingName: string
  status: Boolean
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todo: string = "";
  public todoList: IThing[] = [];
  public todoTotal = 0;
  public finishTotal = 0;
  public unfinishedTotal = 0;

  constructor() { }

  public ngOnInit(): void { }

  public handleTodoChange(value: string): void {
    this.todoList.push(
      {
        thingName: value,
        status: false
      }
    );
    this.computedTotal()
  }

  public handleTodoListChange(value: IThing[]): void {
    this.computedTotal()
  }

  public computedTotal() {
    this.todoTotal = this.todoList.length;
    this.unfinishedTotal = this.todoList.filter(todo => !todo.status).length
    this.finishTotal = this.todoTotal - this.unfinishedTotal
  }

}
