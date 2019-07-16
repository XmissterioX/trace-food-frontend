import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-restaurant',
  templateUrl: './header-restaurant.component.html',
  styleUrls: ['./header-restaurant.component.css']
})
export class HeaderRestaurantComponent implements OnInit {

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
