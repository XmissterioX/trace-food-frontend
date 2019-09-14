import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-sidebar-restaurant',
  templateUrl: './control-sidebar-restaurant.component.html',
  styleUrls: ['./control-sidebar-restaurant.component.css']
})
export class ControlSidebarRestaurantComponent implements OnInit {
  name: String;
  email: String;
  imageLink: String;
  constructor() { }

  ngOnInit() {
  const Gprofile = JSON.parse(localStorage.getItem('profile'));
  this.name = Gprofile.name;
  this.email = Gprofile.email;
  this.imageLink = Gprofile.image;
  }

}
