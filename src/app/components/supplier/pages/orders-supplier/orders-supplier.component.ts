import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/Order.service';
import { english } from './../../../../../interfaces/datatables.es';
import { Subject } from 'rxjs';
import { Order } from 'src/app/org.turnkeyledger.tracefood';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { UpdateOrderStateService } from 'src/app/services/UpdateOrderState.service';
declare var AdminLTE: any;
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

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
private Transaction;
orders: Order[] = [];
tempList = [];
loading = false;
  constructor(private router: Router, private r: ActivatedRoute,
    public serviceOrder: OrderService,
    private serviceUpdateOrderState: UpdateOrderStateService) { }

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
        { 'extend': 'excel', 'text': 'Export to Excel' },
        {
          text: 'Excute order',
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
    this.loading = true;

    return this.serviceOrder.getAll()
    .toPromise()
    .then((result) => {
      this.loading = false;
      this.errorMessage = null;
      result.forEach(asset => {
        this.tempList.push(asset);
      });
      this.orders = this.tempList;
      this.dtTrigger.next();
      console.log(this.orders);
    })
    .catch((error) => {
      this.loading = false;
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

  public GoToRoute(route: String, order: Order) {
    console.log(order.orderId);
    const navigationExtras: NavigationExtras = {
      queryParams: {
          OrderId: order.orderId,
      }
  };
  this.router.navigate( [ '../order-detail-supplier'], { relativeTo: this.r, queryParams: { orderId: order.orderId } } );

  }

  updateOrder(orderId): Promise<any> {
    this.loading = true;
    this.Transaction = {
      $class: 'org.turnkeyledger.tracefood.UpdateOrderState',
      'orderId': orderId
    };

    return this.serviceUpdateOrderState.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.loading = false;
      this.errorMessage = null;
      location.reload();
    })
    .catch((error) => {
      this.loading = false;
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }

}


