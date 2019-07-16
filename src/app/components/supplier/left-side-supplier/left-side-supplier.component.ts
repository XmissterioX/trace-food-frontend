import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-supplier',
  templateUrl: './left-side-supplier.component.html',
  styleUrls: ['./left-side-supplier.component.css']
})
export class LeftSideSupplierComponent implements OnInit {
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
