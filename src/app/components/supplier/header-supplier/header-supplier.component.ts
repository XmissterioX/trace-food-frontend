import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-supplier',
  templateUrl: './header-supplier.component.html',
  styleUrls: ['./header-supplier.component.css']
})
export class HeaderSupplierComponent implements OnInit {

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
