import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { SideNavComponent } from '../side-nav/side-nav.component';
interface Organisation {
  name:string
}
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  inputs:[`sidenav`]
})
export class ToolbarComponent {
  organisations: Organisation[] = [
    {name:"one"},
    {name:"two"},
    {name:"three"},
  ];
  public sidenav:string;
}
