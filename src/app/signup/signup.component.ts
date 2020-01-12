import { Component, OnInit } from '@angular/core';
import { Signup } from '../class/signup';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpModel = new Signup('', '', '');
  constructor(private api: ApiserviceService, private router: Router) { }
  onSubmit = () => {
    console.log(this.signUpModel);
    this.api.signup(this.signUpModel).subscribe(
      data => console.log('Success!',
       this.router.navigate(['/signin'])),

      // tslint:disable-next-line: no-string-literal
      error => console.log('oops', error.error)
            // erro => console.error('Error', error)
    );
  }
  ngOnInit() {
  }

}
