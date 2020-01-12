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
