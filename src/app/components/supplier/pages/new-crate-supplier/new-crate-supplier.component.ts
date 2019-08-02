import { Component, OnInit } from '@angular/core';
import { MakeCrateService } from 'src/app/services/MakeCrate.service';

@Component({
  selector: 'app-new-crate-supplier',
  templateUrl: './new-crate-supplier.component.html',
  styleUrls: ['./new-crate-supplier.component.css'],
  providers: [MakeCrateService]
})
export class NewCrateSupplierComponent implements OnInit {
  private Transaction;
  private errorMessage;
  constructor(private serviceMakeCrate: MakeCrateService) { }

  ngOnInit() {
  }

  makeCrate(form: any): Promise<any> {
    this.Transaction = {
      $class: 'org.turnkeyledger.tracefood.MakeCrate',
      'crate': {
        '$class': 'org.turnkeyledger.tracefood.Crate',
        'crateId': '1010',
        'name': 'crate name 1010',
        'description': 'crate description 1010'
      }
    };


    return this.serviceMakeCrate.addTransaction(this.Transaction)
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
