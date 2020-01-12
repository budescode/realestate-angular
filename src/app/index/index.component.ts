import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Classfunction } from '../classfunction';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // this is for  ng-multiselect-dropdown;
  dropdownSettings: IDropdownSettings;
  dropdownList = [];
  selectedItems = [];
  propertytype = [];
  // this is for  ng-multiselect-dropdown;
  countrydetaillsapi = [];
  testlist = [];
  dis = false;
  search = '';
  searchModel = new Classfunction(this.search, 'Any', 'Any', '', '', '');
  realdata = [{name: 'DARWIN - NT'}, {name: 'BARTON - ACT'}, {name: 'PARAP - NT'}];
  countrydata = this.realdata;
  inputdata = '';
  apikey = null;
  constructor(private api: ApiserviceService, private router: Router) { }



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
// this function is used to get the country details from api
getCountryDetail = () => {
  // console.log('testingggg');
  this.api.getcountryDetails().subscribe(
    data => {
      // console.log(this.countrydetaillsapi, 'comedylist');
      const unique = this.getUnique(data, 'postcode');
      this.countrydetaillsapi = unique;
      this.testlist = data;
      console.log(this.countrydetaillsapi, 'datttaa');
      console.log(data, 'originalll');
    },
    error => {
      console.log(error);
    }
  );
}

submitForm = () => {
  this.searchModel.propertytype = this.propertytype;
  console.log('search model', this.searchModel.propertytype);
  const searchparams = {name: this.searchModel.name.trim(), bedmin: this.searchModel.bedmin, bedmax: this.searchModel.bedmax,
  pricemin: this.searchModel.pricemin, pricemax: this.searchModel.pricemax, propertytype: this.searchModel.propertytype};
  // console.log('submitted', this.searchModel.propertytype, this.searchModel.name);
  // console.log(this.searchModel.name, this.searchModel.bedmin, this.searchModel.bedmax,
  //   this.searchModel.pricemin, this.searchModel.pricemax);
  this.router.navigate(['/filter', searchparams]);
}

ngOnInit() {
  const key = localStorage.getItem('apikey');
  // console.log('just enteredd', key);
  if (key === null || key === '') {
    this.apikey = null;
  } else {
    this.apikey = key;
    console.log(this.apikey, 'indexxxxkeyyyy');
  }
  this.getCountryDetail();
  this.dropdownList = ['House', 'Apartment & Unit', 'Townhouse', 'Villa', 'Land', 'Acreage', 'Rural', 'Block Of Units', 'Retirement Living'
  ];
  this.selectedItems = [
  ];
  this.dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
}
onItemSelect(item: any) {
  console.log(item, this.propertytype);
  // this.propertytype = item;
  const selected1 = item;
  if (this.propertytype.includes(item)) {
    console.log('yeahhh');
  } else {
    console.log('nahhh');
    this.propertytype.push(item);
    this.searchModel.propertytype = this.propertytype;
    console.log('this.propertytype', this.searchModel.propertytype);

  }

}
onSelectAll(items: any) {
  console.log(items);
  this.propertytype = items;
  this.searchModel.propertytype = this.propertytype;
  console.log('this.propertytype', this.searchModel.propertytype);

}
}





