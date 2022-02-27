import { Component } from '@angular/core';

interface IThing {
  thingName: string
  status: Boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public thing = "";
  public thingList: IThing[] = [];
  public thingTotal = 0;
  public finishTotal = 0;
  public unfinishedTotal = 0;

  constructor() {}

  public handleEnter(event:any) {
    if(event.keyCode === 13) {
      this.handleAdd()
    }
  }
  public handleAdd() {
    if(this.thing.trim() === "") {
      alert("请输入内容！")
      return
    }
    this.thingList.push(
      {
        thingName: this.thing,
        status: false
      }
    )
    this.thing = "";
  }

  public computedTotal() {
    this.thingTotal = this.thingList.length;
    this.unfinishedTotal = this.thingList.filter(thing => !thing.status).length
    this.finishTotal = this.thingTotal - this.unfinishedTotal
  }

  public handleDelete(i: number) {
    this.thingList.splice(i, 1)
  }

  public ngDoCheck(): void {
    this.computedTotal()
  }
}
