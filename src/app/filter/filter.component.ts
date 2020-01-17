import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../service/apiservice.service';
import { Classfunction } from '../classfunction';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  // this is for  ng-multiselect-dropdown;

  dropdownSettings: IDropdownSettings;
  dropdownList = [];
  selectedItems = [];
  propertytype = [];
  // this is for  ng-multiselect-dropdown;
  p = 1;
  searchparam: any;
  filterdetails: any;
  filterdetails1: any;
  previous: any;
  next: any;
  count: any;
  countrydetaillsapi = [];
  testlist = [];
  search = '';
  searchModel = new Classfunction(this.search, '', '', '', '', '');
  constructor(private actRoute: ActivatedRoute, private api: ApiserviceService, private router: Router) {
    this.searchparam = this.actRoute.snapshot.params;
  }
  getFilterDetail = () => {
    // console.log('testingggg');
    this.api.getfilterDetails(this.searchparam).subscribe(
      data => {
        // console.log(this.countrydetaillsapi, 'comedylist');
        this.filterdetails = data.results;
        this.filterdetails1 = data.results;
        this.previous = data.previous;
        this.next = data.next;
        this.count = data.count;
        // this.filterdetails, this.previous, this.next,
        console.log(this.filterdetails.length, 'datttaacountt');
      },
      error => {
        console.log(error);
      }
    );
  }
  mapSearch = () => {
    localStorage.setItem('url', 'this.dataSource.length');
    this.router.navigate(['/mapsearch']);
    console.log('ended');
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
  pricemin() {
    let pricemin  = this.searchModel.pricemin;
    pricemin = pricemin.replace(',', '');
    pricemin = pricemin.replace('$', '');
    pricemin = pricemin.replace(' ', '');
    if (pricemin === 'Any') {
      const newlist = this.filterdetails.filter( el => el.Price >= 0);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(pricemin, 'yeajhh');
    } else {
    // filterdetails
    const newlist = this.filterdetails.filter( el => el.Price >= pricemin);
    this.filterdetails1 = newlist;
    console.log(pricemin, 'yeajhh');
    }
  }
  pricemax() {
    let pricemax  = this.searchModel.pricemax;
    pricemax = pricemax.replace(',', '');
    pricemax = pricemax.replace('$', '');
    pricemax = pricemax.replace(' ', '');
    if (pricemax === 'Any') {
      const newlist = this.filterdetails.filter( el => el.Price <= 10000000000000000);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(pricemax, 'yeajhh');
    } else {
    // filterdetails
    const newlist = this.filterdetails.filter( el => el.Price <= pricemax);
    this.filterdetails1 = newlist;
    console.log(pricemax, 'yeajhh');
    }
  }
  bedmin() {
    const bedmin  = this.searchModel.bedmin;
    if (bedmin === 'Any' ) {
      const newlist = this.filterdetails.filter( el => el.Bedrooms >= 10000000000000000);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(bedmin, 'yeajhh');
    } else if (bedmin === 'Studio' ) {
      const newlist = this.filterdetails.filter( el => el.Bedrooms >= 0);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(bedmin, 'yeajhh');
    }  else {
    // filterdetails
    const newlist = this.filterdetails.filter( el => el.Bedrooms >= bedmin);
    this.filterdetails1 = newlist;
    console.log(bedmin, 'yeajhh');
    }
  }
  bedmax() {
    const bedmax  = this.searchModel.bedmax;
    if (bedmax === 'Any' ) {
      const newlist = this.filterdetails.filter( el => el.Bedrooms <= 10000000000000000);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(bedmax, 'yeajhh');
    } else if (bedmax === 'Studio' ) {
      const newlist = this.filterdetails.filter( el => el.Bedrooms <= 0);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(bedmax, 'yeajhh');
    }  else {
    // filterdetails
    const newlist = this.filterdetails.filter( el => el.Bedrooms <= bedmax);
    this.filterdetails1 = newlist;
    console.log(bedmax, 'yeajhh');
    }
  }
  // bathrooms() {
  //   const bathroom  = this.searchModel.Bathrooms;
  //   if (bathroom === 'Any' ) {
  //     const newlist = this.filterdetails.filter( el => el.Bathrooms >= 10000000000000000);
  //     this.filterdetails1 = newlist;
  //     console.log(newlist, this.filterdetails);
  //     console.log(bathroom, 'yeajhh');
  //   } else if (bathroom === 'Studio' ) {
  //     const newlist = this.filterdetails.filter( el => el.Bathrooms >= 0);
  //     this.filterdetails1 = newlist;
  //     console.log(newlist, this.filterdetails);
  //     console.log(bathroom, 'yeajhh');
  //   }  else {
  //   // filterdetails
  //   const newlist = this.filterdetails.filter( el => el.Bathrooms >= bathroom);
  //   this.filterdetails1 = newlist;
  //   console.log(bathroom, 'yeajhh');
  //   }
  // }
  ngOnInit() {
    // console.log(this.searchparam, 'yeah yeah');
    this.getFilterDetail();
    this.dropdownList = ['House', 'Apartment & Unit', 'Townhouse', 'Villa', 'Land',
    'Acreage', 'Rural', 'Block Of Units', 'Retirement Living'
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

}
