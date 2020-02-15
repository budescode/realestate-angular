import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-property',
  templateUrl: './saved-property.component.html',
  styleUrls: ['./saved-property.component.css']
})
export class SavedPropertyComponent implements OnInit {
  mysaved = [];
  previous: any;
  next: any;
  count: any;
  p = 1;
  constructor(private api: ApiserviceService, private router: Router) { }

  ngOnInit() {
    this.api.mysavedproperty().subscribe(
      data => {
        // console.log(this.countrydetaillsapi, 'comedylist');
        this.mysaved = data.results;
        this.previous = data.previous;
        this.next = data.next;
        this.count = data.count;
        // this.filterdetails, this.previous, this.next,
        console.log(data.results, 'datttaacountt');
      },
      error => {
        console.log(error);
      }
    );
  }

}
