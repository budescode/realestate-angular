import { Component, OnInit } from '@angular/core';
// import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Signin } from './class/signin';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from './service/apiservice.service';

import {
  AuthService,
  SocialUser,
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'ng4-social-login';

// console.log(`jQuery version: ${$.fn.jquery}`);
// angularx-social-login https://www.djamware.com/post/5d4628d5721e1ce9d7dc95b0/angular-8-tutorial-facebook-login
// https://www.djamware.com/post/5d4628d5721e1ce9d7dc95b0/angular-8-tutorial-facebook-login
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// tslint:disable-next-line: no-unused-expression
export class AppComponent implements OnInit {
  signInModel = new Signin('budescode', 'bossess1');
  title = 'project';
  details = [{longitude: 51.678418, latitude: 7.809007}];
  latitude = 51.678418;
  longitude = 7.809007;
  public user: any =  SocialUser;
  username = 'bude';
  loggedIn: boolean;
  apikey = 'null';
  closeResult: string;
  modalOptions: NgbModalOptions;

  constructor(private socialAuthService: AuthService,  private api: ApiserviceService, private router: Router,  private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  FBSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
      this.username = userData.name;
      console.log('yeahhhh', this.username);
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  signInWithFB(): void {
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  onSubmit(): void {
    console.log(this.signInModel);
    this.api.signin(this.signInModel).subscribe(
      data => {
        localStorage.setItem('apikey', data.key);
        const key = localStorage.getItem('apikey');
        console.log('Success!', 'logged in', key);
        this.router.navigate(['/']);
      },
      // tslint:disable-next-line: no-string-literal
      error => console.log('oops', error.error)
            // erro => console.error('Error', error)
    );
  }
  signOut(): void {
    localStorage.setItem('apikey', null);
    this.apikey = 'null';
    this.router.navigate(['/']);
    // this.authService.signOut();
  }

  ngOnInit() {
    const key = localStorage.getItem('apikey');
    // console.log('just enteredd againnn', key);
    if (key === null || key === '') {
      this.apikey = 'null';
    } else {
      this.apikey = key;
      console.log(this.apikey, 'apiiiiikeyyyy');
    }
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(this.user, 'userrr');
    // });
  }

}

