import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar-restaurant',
  templateUrl: './left-sidebar-restaurant.component.html',
  styleUrls: ['./left-sidebar-restaurant.component.css']
})
export class LeftSidebarRestaurantComponent implements OnInit {

  name: String;
  email: String;
  imageLink: String;
  constructor() { }

  ngOnInit() {
    const Gprofile = JSON.parse(localStorage.getItem('profile'));
    this.name = Gprofile.name;
    this.email = Gprofile.email;
    this.imageLink = Gprofile.image;
    console.log(this.imageLink);
  }

}
