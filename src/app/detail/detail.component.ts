import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class DetailComponent implements OnInit {
  details = [{longitude: 7.809007, latitude: 51.678418}, {longitude: 9.809007, latitude: 60.678418},
     {longitude: 8.809007, latitude: 55.678418}];
  latitude = 55.678418;
  longitude = 8.809007;
  location: Location;
  lastindex: number;
  posterId: string;
  show = false;
  posterdetails = [{street_number: 'none', created: 'none', street_name: 'none',
  suburb: 'none', state: 'none', Price: 'none', image: 'none', Bedrooms: 'none', Bathrooms: 'none',
  Car_spaces: 'none', land_size: 'none', Property_type: 'none', description: 'none'
}];



  constructor(location: Location, private api: ApiserviceService) {
    this.location = location;
  }

  getPosterDetail = (id) =>  {
    this.api.getposterDetails(id).subscribe(
      data => {
        // console.log(this.countrydetaillsapi, 'comedylist');
        this.posterdetails = data.results;
        // this.longitude = Number(data.results[0].longitude);
        // this.latitude = Number(data.results[0].latitude);
        console.log('datttaa', data.results[0].longitude, data.results[0].latitude);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.lastindex = this.location.path().lastIndexOf('/') + 1;
    this.posterId = this.location.path().substring(this.lastindex);
    this.getPosterDetail(this.posterId);
    console.log(this.posterId, 'location', this.location.path().lastIndexOf('/'));
  }

}
