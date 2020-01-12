import { Component, OnInit } from '@angular/core';
import { Sell } from '../class/sell';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

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
  constructor(private api: ApiserviceService, private router: Router) { }

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
  onSubmit() {
    console.log(this.sellModel, 'submitted');
    this.api.sell(this.sellModel).subscribe(
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
