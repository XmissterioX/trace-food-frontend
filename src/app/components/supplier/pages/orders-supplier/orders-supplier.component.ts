import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/Order.service';
import { english } from './../../../../../interfaces/datatables.es';
import { Subject } from 'rxjs';
import { Order } from 'src/app/org.turnkeyledger.tracefood';
declare var AdminLTE: any;
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
declare var AdminLTE: any;
@Component({
  selector: 'app-orders-supplier',
  templateUrl: './orders-supplier.component.html',
  styleUrls: ['./orders-supplier.component.css']
})
export class OrdersSupplierComponent implements OnInit {
private errorMessage;
dtOptions: any = {};
dtLanguage: any = english;
dtTrigger: Subject<any> = new Subject();
private allAssets;
private asset;
private currentId;


orders: Order[] = [];
  constructor(public serviceOrder: OrderService) { }

  ngOnInit() {
    AdminLTE.init();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: this.dtLanguage,
      // Declare the use of the extension in the dom parameter
      dom: 'lfBrtip',

      // Configure the buttons
      buttons: [
        { extend: 'colvis', text: 'Hide / Show Columns' },
        {
          extend: 'copy', text: 'Copy to clipboard'
        },
        { extend: 'print', text: 'Print' },
        // tslint:disable-next-line:max-line-length
        { 'extend': 'excel', 'text': '<button type="button" class="btn btn-primary btn-sm"> <i class="fa fa-file-excel-o"></i> Export to excel</button>' },
        {
          text: 'Create new order',
          buttons: [{ className: 'btn-primary'}],
          action: function ( e, dt, node, config ) {
              alert( 'Button activated' );
          }
      }
      ],
      columnDefs: [
        {
           'targets': 0,
           'checkboxes': {
              'selectRow': true
           }
        }
     ],
     'select': {
        'style': 'multi'
     },
    };
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceOrder.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.orders = tempList;
      this.dtTrigger.next();
      console.log(this.orders);
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        console.log(this.errorMessage);
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        console.log(this.errorMessage);
      } else {
        this.errorMessage = error;
        console.log(this.errorMessage);
      }
    });
  }


}
