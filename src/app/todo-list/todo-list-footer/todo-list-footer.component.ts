import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.scss']
})
export class TodoListFooterComponent implements OnInit {
  @Input() public total = 0;
  @Input() public finishTotal = 0;
  @Input() public unfinishedTotal = 0;

  constructor() { }

  public ngOnInit(): void { }

}
