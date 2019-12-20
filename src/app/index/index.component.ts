import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Classfunction } from '../classfunction';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dis = false;
  search = '';
  searchModel = new Classfunction(this.search);
  realdata = [{name: 'DARWIN - NT'}, {name: 'BARTON - ACT'}, {name: 'PARAP - NT'}];
  countrydata = this.realdata;
  constructor() { }

  ngOnInit() {
  }


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
getDetails = (data: { name: string; }) => {
  const value = this.searchModel.name;
  console.log(data.name, this.searchModel.name );
  this.dis = false;
  // tslint:disable-next-line: no-shadowed-variable
  const newcountrydata = this.realdata.filter(element => element.name !== data.name);
  this.countrydata = newcountrydata;

  if (this.searchModel.name === undefined) {
    this.searchModel.name = data.name + ';';
  } else {
    this.searchModel.name = this.searchModel.name + ' ' + data.name + ';';
  }
}

filterCountryDetails = () => {
  if (this.searchModel.name.toUpperCase() === '') {
    this.countrydata = this.realdata;
  }
  const value = this.searchModel.name.toUpperCase();
  const test = this.realdata.filter( el => el.name.includes(value));
  this.countrydata = test;
  console.log(value, test);
}

}


