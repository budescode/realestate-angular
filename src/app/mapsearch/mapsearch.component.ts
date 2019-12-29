import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-mapsearch',
  templateUrl: './mapsearch.component.html',
  styleUrls: ['./mapsearch.component.css']
})
export class MapsearchComponent implements OnInit {
  details = [];
 latitude = 55.678418;
 longitude = 8.809007;
  constructor(private api: ApiserviceService) { }
  getmapSearch = () => {
    const searchurl = localStorage.getItem('searchparams');
    console.log(localStorage.getItem('searchparams'), 'this is it ooh');
    console.log('clicked');
    this.api.getmapSearch(searchurl).subscribe(
      data => {
        this.details = data.results;
        this.latitude = data.results[0].latitude;
        this.longitude = data.results[0].longitude;
        console.log(data.results, this.latitude, this.longitude, 'datttaacounttaaaaa');
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getmapSearch();
  }

}
