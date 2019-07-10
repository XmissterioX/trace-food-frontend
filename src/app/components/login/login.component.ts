import { Component, OnInit, OnDestroy } from '@angular/core';
import { SystemService } from 'src/app/services/System.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private errorMessage;

  constructor(private systemService: SystemService) { }

  ngOnInit() {
    this.Ping();
  }

   ngOnDestroy() {

  }

  Ping() {
    this.systemService.ping().subscribe(
      res => {
        console.log(res);
      },
      err => {console.log(err);
        if (err.status === 401) {
          this.errorMessage = 'Authorization Required';
        } else if (err.status === 500) {
          this.errorMessage = 'A business network card has not been specified';
        }
      }
    );
  }

}
