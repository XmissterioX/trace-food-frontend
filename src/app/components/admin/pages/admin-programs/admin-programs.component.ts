import { Component, OnInit, OnDestroy } from '@angular/core';
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
  selector: 'app-admin-programs',
  templateUrl: './admin-programs.component.html',
  styleUrls: ['./admin-programs.component.css'],
  providers: [OrderService]
})
export class AdminProgramsComponent implements OnInit, OnDestroy {

  dtOptions: any = {};
  dtLanguage: any = english;
  dtTrigger: Subject<any> = new Subject();
  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  orders: Order[] = [];
 test: Order;
  constructor(public serviceOrder: OrderService) {

   }

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
        { extend: 'excel', text: 'Export to Excel' },
      ]
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
      this.test = this.orders[0];
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

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
