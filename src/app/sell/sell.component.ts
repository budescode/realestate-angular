import { Component, OnInit } from '@angular/core';
import { Sell } from '../class/sell';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})

export class SellComponent implements OnInit {
  sellModel = new Sell(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
   null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, false, false, false,
   false, false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false, false
  );
  statelist = ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT'];
  postcode = ['1001', '1002'];
  countrydetaillsapi = [];
  image: File = null;
  plan: File = null;
  form = new FormData();
  constructor(private api: ApiserviceService, private router: Router, private http: HttpClient) { }

  // this function is used to remove duplicates
  getUnique(arr, comp) {

    const unique = arr
         .map(e => e[comp])

       // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);

    return unique;
  }
  getCountryDetail = (state) => {
    // console.log('testingggg');
    this.api.getcountryDetails2(state).subscribe(
      data => {
        // console.log(this.countrydetaillsapi, 'comedylist');
        const unique = this.getUnique(data, 'postcode');
        this.countrydetaillsapi = unique;
        // this.testlist = data;
        console.log(this.countrydetaillsapi, 'datttaa');
        console.log(data, 'original');

      },
      error => {
        console.log(error);
      }
    );
  }
  onstateChange() {
    this.getCountryDetail(this.sellModel.state);
    console.log('yeahh', this.sellModel.state );
  }
  onFileSelected(event, formname) {
    // const image = event.target.files[0];
    this.form.append(formname, event.target.files[0], event.target.files[0].name);

   }
  //  onFileSelected1(event, data) {
  //   // const image = event.target.files[0];
  //   console.log(event.target.files[0], event.target.files[0].name);
  //   this.form.append('plan', event.target.files[0], event.target.files[0].name);
  //  }
  onSubmit() {

    // console.log(this.sellModel, 'submitted', form);
    for (const [key, value] of Object.entries(this.sellModel)) {
      if (key.includes('image') || key.includes('plan')) {
      //   if (value !== null || value !== '') {
      //   this.form.append('image', key, value);
      //   console.log('yeah its a file');
      // }
      } else {
        this.form.append(key, value);
      }
      console.log(key, value, 'yeah');
    }
    console.log(this.form, 'formmm');
    this.http.post('http://127.0.0.1:8000/indexapi/postercreate/', this.form,
     {headers: new HttpHeaders({Authorization: 'Token b9c43a76d8e68e995decb6f7e80546cf475fe844'})}).subscribe(data => {
      // this.apikey = data.key;
      console.log('Success!');
    },
    // tslint:disable-next-line: no-string-literal
    error => console.log('oops', error.error)
          // erro => console.error('Error', error)
  );
    // this.api.sell(this.sellModel).subscribe(
    //   data => {
    //     localStorage.setItem('apikey', data.key);
    //     const key = localStorage.getItem('apikey');
    //     // this.apikey = data.key;
    //     console.log('Success!', 'logged in', key);
    //     this.router.navigate(['/']);
    //   },
    //   // tslint:disable-next-line: no-string-literal
    //   error => console.log('oops', error.error)
    //         // erro => console.error('Error', error)
    // );
  }
  ngOnInit() {
  }

}
