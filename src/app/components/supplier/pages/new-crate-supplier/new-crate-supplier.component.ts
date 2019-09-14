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
  crateID = '';
  name = '';
  description = '';
  loading = false;
  constructor(private serviceMakeCrate: MakeCrateService) { }

  ngOnInit() {
  }

  makeCrate(form: any): Promise<any> {
    this.loading = true;
    console.log(this.crateID + ' ' + this.name + ' ' + this.description);
    this.Transaction = {
      $class: 'org.turnkeyledger.tracefood.MakeCrate',
      'crate': {
        '$class': 'org.turnkeyledger.tracefood.Crate',
        'crateId': this.crateID,
        'name': this.name,
        'description': this.description
      }
    };


    return this.serviceMakeCrate.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.loading = false;
      this.errorMessage = null;
    })
    .catch((error) => {
      this.loading = false;
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
      alert(this.errorMessage);
    });
  }

}
