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
    this.ping();
  }

   ngOnDestroy() {

  }

  ping() {
    this.systemService.ping().subscribe(
      res => {
        console.log(res);
        let str = res['participant'];
        console.log(str);
        str = str.substring(str.indexOf('#') + 1);
        console.log(str);
        if (str.startsWith('S1')) {
          console.log('true');
        } else {console.log(false); }
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
