import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';
import { Signin } from '../class/signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInModel = new Signin('', '');
  constructor(private api: ApiserviceService, private router: Router) { }
  onSubmit(): void {
    this.api.signin(this.signInModel).subscribe(
      data => {
        localStorage.setItem('apikey', data.key);
        const key = localStorage.getItem('apikey');
        // this.apikey = data.key;
        console.log('Success!', 'logged in', key);
        this.router.navigate(['/']);
      },
      // tslint:disable-next-line: no-string-literal
      error => console.log('oops', error.error)
            // erro => console.error('Error', error)
    );
  }
  ngOnInit() {
  }

}
