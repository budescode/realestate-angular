import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../service/apiservice.service';
import { Classfunction } from '../classfunction';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Filterclass } from '../class/filterclass';

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
  // the following are  is for pagination
  p = 1;
  previous: any;
  next: any;
  count: any;
  // end pagination
  dis = false;
  inputdata = '';
  mysaved: any; // this is used to store user saved search
  realdata = [{name: 'DARWIN - NT'}, {name: 'BARTON - ACT'}, {name: 'PARAP - NT'}];
  countrydata = this.realdata;
  searchparam: any; //
  filterdetails: any;
  filterdetails1 = [];
  countrydetaillsapi = [];
  testlist = [];
  search = '';
  yes = 'yes'; // dont forget to delete
  filteredseachparam: any; // this will be used in this page when searching again. chack getfilterdetails and submitForm function
  searchitems = ''; // this is to place the searchitems, state and suburbs
  searchModel = new Classfunction(this.search, '', '', '', '', '');
  filterModel = new Filterclass(this.searchitems, 'Any', 'Any', 'Any', 'Any', '', '', '', '', '', false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false
  );
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
      const unique = this.getUnique(data, 'suburb');
      this.countrydetaillsapi = data;
      this.testlist = data;
      // console.log(this.countrydetaillsapi, 'datttaa');
      // console.log(data, 'originalll');
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
  getSavedItem() {
    this.api.mysavedproperty().subscribe(
      data => {
        // console.log(this.countrydetaillsapi, 'comedylist');
        let i: any;
        let a: any;
        this.mysaved = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }

  // this function is used to checked for items that are stared and are in the search result and star them
  starSearchedItems() {
    console.log('Lord help me', this.filterdetails1, this.mysaved.length);
    let a: any;
    let i: any;
    for (a = 0; a < this.filterdetails1.length; a++) {
      for ( i = 0; i < this.mysaved.length; i++) {
     if (this.filterdetails1[a].id_user === this.mysaved[i].id_user) {
        console.log('yeah it does');
      } else {
        console.log(this.filterdetails1[a].id_user, this.mysaved[i].id_user);
      }

     }
  }
  }

  // this funtion is used to star a search
  starItem(i) {
    this.api.saveproperty(i.id_user).subscribe(
      data => {
        // console.log(this.countrydetaillsapi, 'comedylist');
        console.log(data, 'originalll');
      },
      error => {
        console.log(error);
      }
    );
  }
  pricemin() {
    let pricemin  = this.filterModel.pricemin;
    pricemin = pricemin.replace(',', '');
    pricemin = pricemin.replace('$', '');
    pricemin = pricemin.replace(' ', '');
    if (pricemin === 'Any') {
      const newlist = this.filterdetails.filter( el => el.Price >= 0);
      this.filterdetails1 = newlist;
    } else {
    // filterdetails
    const newlist = this.filterdetails.filter( el => el.Price >= pricemin);
    this.filterdetails1 = newlist;
     }
  }
  pricemax() {
    let pricemax  = this.filterModel.pricemax;
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
    const bedmin  = this.filterModel.bedmin;
    if (bedmin === 'Any' ) {
      const newlist = this.filterdetails.filter( el => el.Bedrooms >= 0);
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
    const bedmax  = this.filterModel.bedmax;
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

  carSpaces() {
    const carspaces  = this.filterModel.Car_spaces;
    if (carspaces === 'Any' ) {
      const newlist = this.filterdetails.filter( el => el.Car_spaces <= 10000000000000000);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails, 'testing');
      console.log(carspaces, 'yeajhh');
    } else if (carspaces === 'Studio' ) {
      const newlist = this.filterdetails.filter( el => el.Car_spaces >= 0);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(carspaces, 'yeajhh');
    }  else {
    // filterdetails
    const newlist = this.filterdetails.filter( el => el.Car_spaces >= carspaces);
    this.filterdetails1 = newlist;
    console.log(carspaces, 'yeajhh');
    }
  }
  bathrooms() {
    const bathroom  = this.filterModel.Bathrooms;
    if (bathroom === 'Any' ) {
      const newlist = this.filterdetails.filter( el => el.Bathrooms <= 10000000000000000);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(bathroom, 'yeajhh');
    } else if (bathroom === 'Studio' ) {
      const newlist = this.filterdetails.filter( el => el.Bathrooms >= 0);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(bathroom, 'yeajhh');
    }  else {
    // filterdetails
    const newlist = this.filterdetails.filter( el => el.Bathrooms >= bathroom);
    this.filterdetails1 = newlist;
    console.log(bathroom, 'yeajhh');
    }
  }
  landsize() {
    const landsize  = this.filterModel.land_size;
    if (landsize === 'Any' ) {
      const newlist = this.filterdetails.filter( el => el.land_size <= 10000000000000000);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(landsize, 'yeajhh');
    } else if (landsize === 'Studio' ) {
      const newlist = this.filterdetails.filter( el => el.land_size >= 0);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(landsize, 'yeajhh');
    }  else {
    // filterdetails
    const newlist = this.filterdetails.filter( el => el.land_size >= landsize);
    this.filterdetails1 = newlist;
    console.log(landsize, 'yeajhh');
    }
  }
  new_or_established() {
    const newor  = this.filterModel.new_or_established;
    if (newor === 'Any' ) {
      const newlist = this.filterdetails.filter( el => el.new_or_established = 'New');
      const newlist2 = this.filterdetails.filter( el => el.new_or_established = 'Established');
      newlist.push(newlist2);
      this.filterdetails1 = newlist;
      console.log(newlist, this.filterdetails);
      console.log(newor, 'yeajhh');
    } else {
    // filterdetails
    const newlist = this.filterdetails.filter( el => el.new_or_established = newor);
    this.filterdetails1 = newlist;
    console.log(newor, 'yeajhh');
    }
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
    console.log(this.filterModel.name, 'yeahhh');
    }
    // this function is used to filter country details from the input
    filterCountryDetails = () => {
      // if (this.filterModel.name) {

      // }
      this.dis = true;
      const input = this.filterModel.name.lastIndexOf(';');
      const lastinput = this.filterModel.name.slice(-1);
      console.log(lastinput);

      // tslint:disable-next-line: triple-equals
      if (lastinput === ';') {
      this.inputdata = this.filterModel.name;
      this.testlist = [];
      }
      if (lastinput === '') {
      this.inputdata = '';
      this.filterModel.name = this.inputdata;

      }
      if (input !== -1) {
        console.log('started11');
        const newvalue = this.filterModel.name.toUpperCase().substring(input + 1).trim();
        // console.log('yeayyh', input, newvalue);
        const value = this.filterModel.name.toUpperCase();
        console.log(newvalue);
        // const inputvalue = this.filterModel.name.toUpperCase();
        // const newvalue = this.filterModel.name.toUpperCase().substring(input + 1).trim();
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
      if (this.filterModel.name.toUpperCase() === '') {
        this.countrydata = this.realdata;
      }
      if (input === -1 ) {
        console.log('started22');
        const inputvalue = this.filterModel.name.toUpperCase();
        const newvalue = this.filterModel.name.toUpperCase().substring(input + 1).trim();
        if (this.filterModel.name.toUpperCase().includes('-')) {
          const lastin = this.filterModel.name.toUpperCase().lastIndexOf('-');
          const newvalue1 = this.filterModel.name.toUpperCase().substring(lastin + 1).trim();
          const newlist = this.testlist.filter( el => el.state.includes(newvalue1));
          console.log('contains', newvalue1, newlist , this.testlist);
        } else {
          const test1 = this.countrydetaillsapi.filter( el => el.suburb.includes(inputvalue));
          this.testlist = test1;
          console.log(this.testlist, inputvalue, 'valueee');
          console.log('ended');
        }
        // const value = this.filterModel.name.toUpperCase();
        // const test = this.realdata.filter( el => el.name.includes(value));
        // this.countrydata = test;
        // console.log(value, test);
      }

    }
    // this function is used to put the filtered detail into the input when they click the suggested one or add a semi colon
    getDetails = (data: { state: string; suburb: string }) => {
      const value = this.filterModel.name;
      console.log(data.state, data.suburb, this.filterModel.name );
      this.dis = false;
      // tslint:disable-next-line: no-shadowed-variable

      // tslint:disable-next-line: no-shadowed-variable
      // const newcountrydata = this.realdata.filter(element => element.name !== data.name);
      // this.countrydata = newcountrydata;
      this.testlist = [];
      if (this.filterModel.name === undefined) {
        this.inputdata = this.inputdata + data.suburb + ' ' + '-' + data.state + ';';
        this.filterModel.name = this.inputdata;
      } else {
       this.inputdata = this.inputdata + data.suburb + ' ' + '-' + data.state + ';';
       this.filterModel.name = this.inputdata;
      }
    }
// this function is used to submit the data in the input
    submitForm = () => {
      this.filterModel.propertytype = this.propertytype;
      const name = this.filterModel.name.trim();
      console.log('search model', name);
      localStorage.setItem('search', this.filterModel.name.trim());
      const searchparams = {name: this.filterModel.name.trim(), bedmin: this.filterModel.bedmin, bedmax: this.filterModel.bedmax,
      pricemin: this.filterModel.pricemin, pricemax: this.filterModel.pricemax, propertytype: this.filterModel.propertytype};
      this.filteredseachparam = searchparams;
      // console.log('submitted', this.filterModel.propertytype, this.filterModel.name);
      // console.log(this.filterModel.name, this.filterModel.bedmin, this.filterModel.bedmax,
      //   this.filterModel.pricemin, this.filterModel.pricemax);
      this.router.navigate(['/filter', this.filteredseachparam]);
      console.log(this.searchparam, 'seArchedddd');
      this.api.getfilterDetails(this.filteredseachparam).subscribe(
        data => {
          // console.log(this.countrydetaillsapi, 'comedylist');
          this.filterdetails = data.results;
          this.filterdetails1 = data.results;
          this.previous = data.previous;
          this.next = data.next;
          this.count = data.count;
          // this.filterdetails, this.previous, this.next,
          // console.log(this.filterdetails.length, data.results, 'datttaacountt');
        },
        error => {
          console.log(error);
        }
      );
    }
  // this function is used to change the filter of boolean properties
  changeFilter(e) {
    // start swimming pool
    if (e === 'Swimming_pool') {
      let mydata  = this.filterModel.Swimming_pool;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Swimming_pool === mydata);
      this.filterdetails1 = newlist;
   }
    // end swimming pool
    // start Balcony
    if (e === 'Balcony') {
      let mydata  = this.filterModel.Balcony;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Balcony === mydata);
      this.filterdetails1 = newlist;
   }
    // end Balcony
    // start Garage
    if (e === 'Garage') {
      let mydata  = this.filterModel.Garage;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Garage === mydata);
      this.filterdetails1 = newlist;
   }
    // end Balcony
    // start Outdoor_area
    if (e === 'Outdoor_area') {
      let mydata  = this.filterModel.Outdoor_area;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Outdoor_area === mydata);
      this.filterdetails1 = newlist;
   }
    // end Outdoor_area
    // start Fully_fenced
    if (e === 'Fully_fenced') {
      let mydata  = this.filterModel.Fully_fenced;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Fully_fenced === mydata);
      this.filterdetails1 = newlist;
   }
    // end Fully_fenced
    // start Shed
    if (e === 'Shed') {
      let mydata  = this.filterModel.Shed;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Shed === mydata);
      this.filterdetails1 = newlist;
   }
    // end Shed
    // start Outdoor_spa
    if (e === 'Outdoor_spa') {
      let mydata  = this.filterModel.Outdoor_spa;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Outdoor_spa === mydata);
      this.filterdetails1 = newlist;
   }
    // end Outdoor_spa
    // start Tennis_court
    if (e === 'Tennis_court') {
      let mydata  = this.filterModel.Tennis_court;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Tennis_court === mydata);
      this.filterdetails1 = newlist;
   }
    // end Tennis_court
    // start Undercover_parking
    if (e === 'Undercover_parking') {
      let mydata  = this.filterModel.Undercover_parking;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Undercover_parking === mydata);
      this.filterdetails1 = newlist;
   }
    // end Undercover_parking
    // start Ensuite
    if (e === 'Ensuite') {
      let mydata  = this.filterModel.Ensuite;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Ensuite === mydata);
      this.filterdetails1 = newlist;
   }
    // end Ensuite
    // start DishWasher
    if (e === 'DishWasher') {
      let mydata  = this.filterModel.DishWasher;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.DishWasher === mydata);
      this.filterdetails1 = newlist;
   }
    // end DishWasher
    // start Built_in_robes
    if (e === 'Built_in_robes') {
      let mydata  = this.filterModel.Built_in_robes;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Built_in_robes === mydata);
      this.filterdetails1 = newlist;
   }
    // end Built_in_robes
    // start Study
    if (e === 'Study') {
      let mydata  = this.filterModel.Study;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Study === mydata);
      this.filterdetails1 = newlist;
   }
    // end Study
    // start Alarm_system
    if (e === 'Alarm_system') {
      let mydata  = this.filterModel.Alarm_system;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Alarm_system === mydata);
      this.filterdetails1 = newlist;
   }
    // end Study
    // start Broadband
    if (e === 'Broadband') {
      let mydata  = this.filterModel.Broadband;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Broadband === mydata);
      this.filterdetails1 = newlist;
   }
    // end Broadband
    // start Floorboards
    if (e === 'Floorboards') {
      let mydata  = this.filterModel.Floorboards;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Floorboards === mydata);
      this.filterdetails1 = newlist;
   }
    // end Floorboards
    // start Gym
    if (e === 'Gym') {
      let mydata  = this.filterModel.Gym;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Gym === mydata);
      this.filterdetails1 = newlist;
   }
    // end Gym
    // start Rumpus_room
    if (e === 'Rumpus_room') {
      let mydata  = this.filterModel.Rumpus_room;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Rumpus_room === mydata);
      this.filterdetails1 = newlist;
   }
    // end Rumpus_room
    // start Workshop
    if (e === 'Workshop') {
      let mydata  = this.filterModel.Workshop;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Workshop === mydata);
      this.filterdetails1 = newlist;
   }
    // end Workshop
    // start Air_conditioning
    if (e === 'Air_conditioning') {
      let mydata  = this.filterModel.Air_conditioning;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Air_conditioning === mydata);
      this.filterdetails1 = newlist;
   }
    // end Air_conditioning
    // start Solar_panels
    if (e === 'Solar_panels') {
      let mydata  = this.filterModel.Solar_panels;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Solar_panels === mydata);
      this.filterdetails1 = newlist;
   }
    // end Solar_panels
    // start Heating
    if (e === 'Heating') {
      let mydata  = this.filterModel.Heating;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Heating === mydata);
      this.filterdetails1 = newlist;
   }
    // end Heating
    // start Water_tank
    if (e === 'Water_tank') {
      let mydata  = this.filterModel.Water_tank;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Water_tank === mydata);
      this.filterdetails1 = newlist;
   }
    // end Water_tank
    // start Solar_hot_water
    if (e === 'Solar_hot_water') {
      let mydata  = this.filterModel.Solar_hot_water;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.Solar_hot_water === mydata);
      this.filterdetails1 = newlist;
   }
    // end Solar_hot_water
    // start High_energy_efficiency
    if (e === 'High_energy_efficiency') {
      let mydata  = this.filterModel.High_energy_efficiency;
      mydata = !mydata;
      const newlist = this.filterdetails.filter( el => el.High_energy_efficiency === mydata);
      this.filterdetails1 = newlist;
   }
    // end High_energy_efficiency


}


ngOnInit() {
    const searchitems = localStorage.getItem('search');
    const pricemin = localStorage.getItem('pricemin');
    const pricemax = localStorage.getItem('pricemax');
    const bedmin = localStorage.getItem('bedmin');
    const bedmax = localStorage.getItem('bedmax');
    console.log('valuesssss', this.searchparam, pricemin, pricemax, bedmin, bedmax);
    this.searchitems = searchitems;
    this.filterModel = new Filterclass(searchitems, pricemin, pricemax, bedmin, bedmax, '', 'Any', 'Any', 'Any', '', false, false, false,
      false, false, false, false, false, false, false, false, false, false, false, false, false, false,
      false, false, false, false, false, false, false, false
      );


    console.log('search', this.searchitems);
    console.log(this.filterModel);
    // console.log(this.searchparam, 'yeah yeah');
    this.getFilterDetail();
    this.getCountryDetail();
    this.getSavedItem();
    // this.starSearchedItems();
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
// tslint:disable-next-line: use-lifecycle-interface
ngOnChanges() {
  console.log('changeeddddd');
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    console.log('initializedddddddddddyeeyey')
  }
}
