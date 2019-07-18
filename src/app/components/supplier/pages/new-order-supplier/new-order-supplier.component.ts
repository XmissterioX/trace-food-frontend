import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-new-order-supplier',
  templateUrl: './new-order-supplier.component.html',
  styleUrls: ['./new-order-supplier.component.css']
})
export class NewOrderSupplierComponent implements OnInit {

  // tslint:disable-next-line:member-ordering

  public list1: Employee[];
  public list2: Employee[];
  constructor() { }

  ngOnInit() {
    this.list1 = [{ id: '1', name: 'Dr Nice', dept: 'dept'},
    { id: '2', name: 'Dr Nice', dept: 'dept'},
    { id: '3', name: 'Dr Nice', dept: 'dept'}];
    this.list2 =  [];
  }

}
