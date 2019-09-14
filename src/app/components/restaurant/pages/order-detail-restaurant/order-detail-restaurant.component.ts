import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/Order.service';

import { SelectItem } from 'primeng/components/common/selectitem';
import { ActivatedRoute } from '@angular/router';
import { Order, Trace, Crate } from 'src/app/org.turnkeyledger.tracefood';


@Component({
  selector: 'app-order-detail-restaurant',
  templateUrl: './order-detail-restaurant.component.html',
  styleUrls: ['./order-detail-restaurant.component.css']
})
export class OrderDetailRestaurantComponent implements OnInit {
  errorMessage: any;
  public crates: Crate[];
  selectedCrate: Crate;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  public sortKey: string;

  public sortField: string;

  sortOrder: number;
  currentOrder: Order;
  currentOrderResto: String;
  currentOrderTraces: Trace[];
  currentOrderCrates: Crate[];

  // trace dialog
  display = false;

  loading = false;
  private Transaction;
  constructor(private route: ActivatedRoute, public serviceOrder: OrderService) {
    this.route.queryParams.subscribe(params => {
    console.log(params['orderId']);
    if (params['orderId'] != null) {
      this.getOrderById(params['orderId']);
    }
});
}

  ngOnInit() {
    this.sortOptions = [
      {label: 'Crate ID', value: 'crateId'}
  ];
    this.crates = [];
  }

  selectCrate(event: Event, crate: Crate) {
    this.selectedCrate = crate;
    this.displayDialog = true;
    event.preventDefault();
}

onSortChange(event) {
  const value = event.value;

  if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
  } else {
      this.sortOrder = 1;
      this.sortField = value;
  }
}

onDialogHide() {
  this.selectedCrate = null;
}

getOrderById(id: any): Promise<any> {
this.loading = true;
    return this.serviceOrder.getAsset(id)
    .toPromise()
    .then((result) => {
      this.loading = false;
      console.log('result' + JSON.stringify(result));
      this.errorMessage = null;
      const formObject = {
        'orderId': null,
        'commodityName': null,
        'commodityQuantity': null,
        'orderStatus': null,
        'traces': null,
        'crates': null,
        'supplier': null,
        'restaurant': null
      };

      if (result.orderId) {
        formObject.orderId = result.orderId;
      } else {
        formObject.orderId = null;
      }

      if (result.commodityName) {
        formObject.commodityName = result.commodityName;
      } else {
        formObject.commodityName = null;
      }

      if (result.commodityQuantity) {
        formObject.commodityQuantity = result.commodityQuantity;
      } else {
        formObject.commodityQuantity = null;
      }

      if (result.orderStatus) {
        formObject.orderStatus = result.orderStatus;
      } else {
        formObject.orderStatus = null;
      }

      if (result.traces) {
        formObject.traces = result.traces;
      } else {
        formObject.traces = null;
      }

      if (result.crates) {
        formObject.crates = result.crates;
      } else {
        formObject.crates = null;
      }

      if (result.supplier) {
        formObject.supplier = result.supplier;
      } else {
        formObject.supplier = null;
      }

      if (result.restaurant) {
        formObject.restaurant = result.restaurant;
      } else {
        formObject.restaurant = null;
      }
      this.currentOrder = formObject;
      this.currentOrderResto = JSON.stringify(this.currentOrder.restaurant);
      this.currentOrderResto = this.currentOrderResto.substring(this.currentOrderResto.indexOf('#') + 1, this.currentOrderResto.length - 1);
      this.currentOrderTraces = this.currentOrder.traces;
      this.currentOrderCrates = this.currentOrder.crates;
      console.log('oko' + JSON.stringify(this.currentOrderCrates));

    })
    .catch((error) => {
      this.loading = false;
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

}
