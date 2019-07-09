import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
