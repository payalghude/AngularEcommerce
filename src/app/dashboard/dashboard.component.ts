import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public room = {};
  public roomDetail = [{
      "roomName": "Room-1",
      "floorNumber": "2nd Floor",
      "buildingName": "Golden Millenium"
},
{
  "roomName": "Room-2",
  "floorNumber": "3nd Floor",
  "buildingName": "Silver Millenium"
}];
  constructor() { }

  ngOnInit() {
  }

}
