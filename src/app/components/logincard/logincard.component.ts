import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/System.service';

@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.css']
})
export class LogincardComponent implements OnInit {
  selectedFile = null;
  hidden = true;
  password: string;
  constructor(private systemService: SystemService) {
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    this.hidden = false;
  }

  onUpload() {

    if (this.password.length > 0 && this.selectedFile != null) {
        // this.loading = true;
  this.systemService.uploadCard(this.selectedFile, this.password).subscribe(res => {
    // this.loading = false;
    console.log(res);

  },
  err => {console.log(err);
  //  this.loading = false;
    });
      } else {
       console.log('enter your password');
      }
  }
}
