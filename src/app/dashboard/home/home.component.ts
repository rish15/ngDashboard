import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  TotalEmployees = 80;
  presentToday = 70;
  todaysAttendance = this.presentToday/this.TotalEmployees*100;
}
