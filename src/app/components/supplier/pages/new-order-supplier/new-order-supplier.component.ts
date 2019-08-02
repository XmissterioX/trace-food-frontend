import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { QueriesService } from 'src/app/queries/crateswithoutorder.service';
import { MakeOrderService } from 'src/app/services/MakeOrder.service';
import { Crate } from './crate';



@Component({
  selector: 'app-new-order-supplier',
  templateUrl: './new-order-supplier.component.html',
  styleUrls: ['./new-order-supplier.component.css'],
  providers: [MakeOrderService]
})
export class NewOrderSupplierComponent implements OnInit {

  // tslint:disable-next-line:member-ordering
  orderId: string;
  CommodityName: String;
  commodityQuantity: String;
  restaurantId: String;
  private Transaction;
  public list1: Crate[];
  public list2: Crate[];
  cratesToAdd: String[];
  data: any;
  private errorMessage;
  constructor(private queries: QueriesService, private serviceMakeOrder: MakeOrderService) { }

  ngOnInit() {
    this.list2 =  [];
    this.cratesToAdd = [];
    this.getUnownedCrates();
  }
getUnownedCrates() {
  this.queries.getUnownedCrates().subscribe(res => {
 this.list1 = res;
 console.log(this.list1);
  },
  err => {
  console.log(err);
  });
}

addTransaction(): Promise<any> {
  this.Transaction = {};
  this.list2.forEach(element => {
    this.cratesToAdd.push('resource:org.turnkeyledger.tracefood.Crate#' + element.crateId);
  });
  //  this.cratesToAdd.push('resource:org.turnkeyledger.tracefood.Crate#1');

  console.log(this.cratesToAdd);
  console.log('***');
    this.Transaction = {
      $class: 'org.turnkeyledger.tracefood.MakeOrder',
      'order': {
        '$class': 'org.turnkeyledger.tracefood.Order',
        'orderId': '71',
        'commodityName': 'Banana',
        'commodityQuantity': '200' + 'Kg',
        'crates': this.cratesToAdd,
      'restaurant': 'resource:org.turnkeyledger.tracefood.Restaurant#' + 'R1-1'
      }
    };



  return this.serviceMakeOrder.addTransaction(this.Transaction)
  .toPromise()
  .then(() => {
    this.errorMessage = null;
  })
  .catch((error) => {
    if (error === 'Server error') {
      this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
    } else {
      this.errorMessage = error;
    }
  });
}


}
