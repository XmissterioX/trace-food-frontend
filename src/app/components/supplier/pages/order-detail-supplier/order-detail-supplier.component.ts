import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/Order.service';
import { Crate } from '../new-order-supplier/crate';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'app-order-detail-supplier',
  templateUrl: './order-detail-supplier.component.html',
  styleUrls: ['./order-detail-supplier.component.css'],
  providers: [OrderService]
})
export class OrderDetailSupplierComponent implements OnInit {
  errorMessage: any;
  public crates: Crate[];
  selectedCrate: Crate;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  public sortKey: string;

  public sortField: string;

  sortOrder: number;
  constructor(public serviceOrder: OrderService) { }

  ngOnInit() {
    this.sortOptions = [
      {label: 'Crate ID', value: 'crateId'}
  ];
    this.crates = [];
    this.crates.push(new Crate('1', 'aa', 'ee'));
    this.crates.push(new Crate('3', 'cc', 'tt'));
    this.crates.push(new Crate('2', 'bb', 'rr'));


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

    return this.serviceOrder.getAsset(id)
    .toPromise()
    .then((result) => {
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

    })
    .catch((error) => {
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
