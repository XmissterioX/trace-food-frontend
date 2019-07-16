import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/System.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.css']
})
export class LogincardComponent implements OnInit {
  selectedFile = null;
  hidden = true;
  name: string;
  private errorMessage;
  constructor(private systemService: SystemService,
    private route: Router) {
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    this.hidden = false;
  }

  onUpload() {

    if (this.name.length > 0 && this.selectedFile != null) {
        // this.loading = true;
  this.systemService.uploadCard(this.selectedFile, this.name).subscribe(res => {
    // this.loading = false;
    console.log(res);
    console.log(res.status + res.statusText);
   this.ping();

  },
  err => {console.log(err);
  //  this.loading = false;
    });
      } else {
       console.log('enter your password');
      }
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
          this.route.navigate(['/supplier']);
        } else if (str.startsWith('R1')) {
          this.route.navigate(['/restaurant']);
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
