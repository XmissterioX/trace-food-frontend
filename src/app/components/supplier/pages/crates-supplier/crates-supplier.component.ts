import { Component, OnInit } from '@angular/core';
import { english } from 'src/interfaces/datatables.es';
import { Subject } from 'rxjs';
import { CrateService } from 'src/app/services/Crate.service';
import { Crate } from 'src/app/org.turnkeyledger.tracefood';
declare var AdminLTE: any;
@Component({
  selector: 'app-crates-supplier',
  templateUrl: './crates-supplier.component.html',
  styleUrls: ['./crates-supplier.component.css']
})
export class CratesSupplierComponent implements OnInit {
  dtOptions: any = {};
  dtLanguage: any = english;
  dtTrigger: Subject<any> = new Subject();

  private errorMessage;
  crates: Crate[] = [];

  loading = false;
  constructor(public serviceCrate: CrateService) { }

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
        { 'extend': 'excel', 'text': 'Export to Excel' }
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
    const tempList = [];
    return this.serviceCrate.getAll()
    .toPromise()
    .then((result) => {
      this.loading = false;
      console.log(result);
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.crates = tempList;
      this.dtTrigger.next();
      console.log('crate' + this.crates);
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

}
