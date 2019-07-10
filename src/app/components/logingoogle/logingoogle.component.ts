import { Component, ElementRef, OnInit } from '@angular/core';
declare const gapi: any;
@Component({
  selector: 'app-logingoogle',
  templateUrl: './logingoogle.component.html',
  styleUrls: ['./logingoogle.component.css']
})
export class LogingoogleComponent implements OnInit {

  constructor(private element: ElementRef) {
    console.log('ElementRef: ', this.element);
  }
  private clientId = '660493171209-vkfbm3homdthk5rb00pdtapc9anb0ai9.apps.googleusercontent.com';
  private scope = [
    'https://www.googleapis.com/auth/plus.login'
  ].join(' ');
  googleUser: any;
  public auth2: any;
  public googleInit() {
    const that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        scope: that.scope
      });
      console.log('hello');
      that.attachSignin(document.getElementById('googleLogin'));
      that.init();
    });
  }
  public attachSignin(element) {
    console.log('hi');
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        console.log('test');
        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        // YOUR CODE HERE
        window.location.href = 'http://localhost:3000/auth/google';
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  init() {
    this.auth2.isSignedIn.listen(this.signinChanged);
    this.auth2.currentUser.listen(this.userChanged);
    this.refreshValues();
  }

  signinChanged = (val) => {
    console.log('google ### signinChanged', val);
  }

  userChanged = (user) => {
    console.log('google ### User now: ', user);
    this.googleUser = user;
    this.updateGoogleUser();
  }

  updateGoogleUser() {
    console.log('google ### user', this.googleUser);
    if (this.googleUser && this.googleUser.w3 && this.googleUser.Zi) {
      const userProfile = {
        id: this.googleUser.El,
        name: this.googleUser.w3.ig,
        email: this.googleUser.w3.U3,
        image: this.googleUser.w3.Paa,
        token: this.googleUser.Zi.access_token,
        idToken: this.googleUser.Zi.id_token,
        provider: this.googleUser.Zi.idpId
      };
      localStorage.setItem('profile', JSON.stringify(userProfile));
    }
  }

  refreshValues = () => {
    if (this.auth2) {
      console.log('google ### Refreshing values...');

      this.googleUser = this.auth2.currentUser.get();

      this.updateGoogleUser();
    }
  }

  ngOnInit() {
   // this.a =  this.getCookie('access_token');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    this.googleInit();

  }



}
