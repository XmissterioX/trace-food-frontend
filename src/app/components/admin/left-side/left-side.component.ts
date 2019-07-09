import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
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
