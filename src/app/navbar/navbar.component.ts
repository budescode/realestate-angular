import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';
import { Signin } from '../class/signin';
import { Signup } from '../class/signup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  signInModel = new Signin('', '');
  signUpModel = new Signup('', '', '');
  @Input() apikey = 'null';
  check = '';
  closeResult: string;
  modalOptions: NgbModalOptions;
  constructor(private api: ApiserviceService, private router: Router,  private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
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
  open(content, check) {
    this.check = check;
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
