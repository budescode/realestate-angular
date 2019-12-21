import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Classfunction } from '../classfunction';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  countrydetaillsapi = [];
  testlist = [];
  dis = false;
  search = '';
  searchModel = new Classfunction(this.search, '', '', '', '');
  realdata = [{name: 'DARWIN - NT'}, {name: 'BARTON - ACT'}, {name: 'PARAP - NT'}];
  countrydata = this.realdata;
  inputdata = '';
  constructor(private api: ApiserviceService) { }



showDiv = () => {
console.log('show');

if (this.dis === true) {
  this.dis = false;
} else if (this.dis === false ) {
  this.dis = true;
}

}
hideDiv = () => {
// this.dis = false;
console.log(this.searchModel.name, 'yeahhh');
}
getDetails = (data: { state: string; suburb: string }) => {
  const value = this.searchModel.name;
  console.log(data.state, data.suburb, this.searchModel.name );
  this.dis = false;
  // tslint:disable-next-line: no-shadowed-variable

  // tslint:disable-next-line: no-shadowed-variable
  // const newcountrydata = this.realdata.filter(element => element.name !== data.name);
  // this.countrydata = newcountrydata;
  this.testlist = [];
  if (this.searchModel.name === undefined) {
    this.inputdata = this.inputdata + data.suburb + ' ' + '-' + data.state + ';';
    this.searchModel.name = this.inputdata;
  } else {
   this.inputdata = this.inputdata + data.suburb + ' ' + '-' + data.state + ';';
   this.searchModel.name = this.inputdata;
  }
}

filterCountryDetails = () => {
  // if (this.searchModel.name) {

  // }
  this.dis = true;
  const input = this.searchModel.name.lastIndexOf(';');
  const lastinput = this.searchModel.name.slice(-1);
  console.log(lastinput);

  // tslint:disable-next-line: triple-equals
  if (lastinput === ';') {
  this.inputdata = this.searchModel.name;
  this.testlist = [];
  }
  if (lastinput === '') {
  this.inputdata = '';
  this.searchModel.name = this.inputdata;

  }
  if (input !== -1) {
    console.log('started11');
    const newvalue = this.searchModel.name.toUpperCase().substring(input + 1).trim();
    // console.log('yeayyh', input, newvalue);
    const value = this.searchModel.name.toUpperCase();
    console.log(newvalue);
    // const inputvalue = this.searchModel.name.toUpperCase();
    // const newvalue = this.searchModel.name.toUpperCase().substring(input + 1).trim();
    if (newvalue.includes('-')) {
      console.log('yeah it includes');
      const lastin = newvalue.lastIndexOf('-');
      const newvalue1 = newvalue.substring(lastin + 1).trim();
      const newlist = this.testlist.filter( el => el.state.includes(newvalue1));
      console.log('contains', newvalue1, newlist , this.testlist);
    } else {
      console.log('nahh it done');
      const test1 = this.countrydetaillsapi.filter( el => el.suburb.includes(newvalue));
      this.testlist = test1;
      console.log(this.testlist, newvalue, 'valueee');
      // console.log('ended');
    }


    // const test = this.realdata.filter( el => el.name.includes(newvalue));
    // this.countrydata = test;
    // console.log(newvalue, newvalue.length, test, this.realdata );
  }
  if (this.searchModel.name.toUpperCase() === '') {
    this.countrydata = this.realdata;
  }
  if (input === -1 ) {
    console.log('started22');
    const inputvalue = this.searchModel.name.toUpperCase();
    const newvalue = this.searchModel.name.toUpperCase().substring(input + 1).trim();
    if (this.searchModel.name.toUpperCase().includes('-')) {
      const lastin = this.searchModel.name.toUpperCase().lastIndexOf('-');
      const newvalue1 = this.searchModel.name.toUpperCase().substring(lastin + 1).trim();
      const newlist = this.testlist.filter( el => el.state.includes(newvalue1));
      console.log('contains', newvalue1, newlist , this.testlist);
    } else {
      const test1 = this.countrydetaillsapi.filter( el => el.suburb.includes(inputvalue));
      this.testlist = test1;
      console.log(this.testlist, inputvalue, 'valueee');
      console.log('ended');
    }
    // const value = this.searchModel.name.toUpperCase();
    // const test = this.realdata.filter( el => el.name.includes(value));
    // this.countrydata = test;
    // console.log(value, test);
  }

}

getCountryDetail = () => {
  console.log('testingggg');
  this.api.getcountryDetails().subscribe(
    data => {
      // console.log(this.countrydetaillsapi, 'comedylist');
      this.countrydetaillsapi = data;
      this.testlist = data;
      console.log(this.countrydetaillsapi, 'datttaa');
    },
    error => {
      console.log(error);
    }
  );
}

submitForm = () => {
console.log('submitted');
console.log(this.searchModel.name, this.searchModel.bedmin, this.searchModel.bedmax, this.searchModel.pricemin, this.searchModel.pricemax);
}

ngOnInit() {
  this.getCountryDetail();
}


}


