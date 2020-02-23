import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';
import { Signin } from '../class/signin';
import { Signup } from '../class/signup';
import { Sociallogin } from './../class/sociallogin';
import {
  AuthService,
  SocialUser,
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'ng4-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  signInModel = new Signin('', ''); // to sign in a normal user using username and password
  signUpModel = new Signup('', '', ''); // to sign up a user using normal username and password.
  SocialloginModel = new Sociallogin(''); // social login model connecting with django
  apikey = 'null'; // this is used to store the apikey from  django server
  myuser = null; // this is used to store the username from facebook.
  check = ''; // used in the modal
  closeResult: string; // used for the modal
  modalOptions: NgbModalOptions;
  constructor(private socialAuthService: AuthService, private api: ApiserviceService, private router: Router,  private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  // this is social media function to login
  FBSignin(): void {
    // set the apikey and username to null
    localStorage.setItem('apikey', null);
    localStorage.setItem('username', null);
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.SocialloginModel = new Sociallogin(userData.token);
      this.api.socialSignIn(this.SocialloginModel).subscribe(
        data => {
                 // set the apikey and username in the local storage
                 localStorage.setItem('apikey', data.key);
                 localStorage.setItem('username', userData.name);
                 // set the apove apokey and myuser value for auto update
                 this.apikey = data.key;
                 console.log(data, 'dataaa');
                 this.myuser = userData.name;
                 this.modalService.dismissAll();
                 this.router.navigate(['/']);

      },
        // tslint:disable-next-line: no-string-literal
        error => console.log('oops', error.error)
              // erro => console.error('Error', error)
      );
    });
  }

  // this is used to logout a user, setting all the keys to null
  signOut(): void {
    localStorage.setItem('apikey', null);
    localStorage.setItem('username', null);
    this.apikey = 'null';
    this.myuser = null;
    this.router.navigate(['/']);
    // this.authService.signOut();
  }

// this is used to open the modal
  open(content, check) {
    this.check = check;
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // this is used to dismiss the modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  // this funtion is used to register the user wit username and password
  registerUser = () => {
    console.log(this.signUpModel);
    this.api.signup(this.signUpModel).subscribe(
      data => {console.log('Success!'),
          this.check = 'signin';
               this.signUpModel = new Signup('', '', '');
      //  this.router.navigate(['/signin'])),
    },
      // tslint:disable-next-line: no-string-literal
      error => console.log('oops', error.error)
            // erro => console.error('Error', error)
    );
  }

  // this is used to login a normal user using username and password
  loginUser(): void {
    this.api.signin(this.signInModel).subscribe(
      data => {
        localStorage.setItem('apikey', data.key);
        const key = localStorage.getItem('apikey');
        this.apikey = data.key;
        this.modalService.dismissAll();
        this.signInModel = new Signin('', '');
        this.router.navigate(['/']);
      },
      // tslint:disable-next-line: no-string-literal
      error => console.log('oops', error.error)
            // erro => console.error('Error', error)
    );
  }

  ngOnInit() {
    const key = localStorage.getItem('apikey');
    const username = localStorage.getItem('username');
    // console.log('just enteredd againnn', key);,
    if (key === null || key === '') {
      this.apikey = 'null';
    } else {
      this.apikey = key;
      this.myuser = username;
      console.log(this.apikey, 'apiiiiikeyyyy', username);
    }
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(this.user, 'userrr');
    // });
  }

}
