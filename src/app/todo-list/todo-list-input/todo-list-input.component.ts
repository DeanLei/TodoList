import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-input',
  templateUrl: './todo-list-input.component.html',
  styleUrls: ['./todo-list-input.component.scss']
})
export class TodoListInputComponent implements OnInit {
  @Input() public todo = '';
  @Output() public todoChange = new EventEmitter<string>();

  constructor() { }

  public ngOnInit():void { }

  public handleEnterTodo(event:any) {
    if(event.keyCode === 13) {
      this.handleAddTodo()
    }
  }

  public handleAddTodo():void {
    if(this.todo.trim() === '') {
      alert('请输入内容！')
      return
    }
    this.todoChange.emit(this.todo);
    this.todo = '';
  }

}
