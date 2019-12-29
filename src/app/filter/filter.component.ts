import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../service/apiservice.service';
import { Classfunction } from '../classfunction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  searchparam: any;
  filterdetails: any;
  previous: any;
  next: any;
  count: any;
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
        console.log(this.count, 'datttaacountt');
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
  ngOnInit() {
    // console.log(this.searchparam, 'yeah yeah');
    this.getFilterDetail();
  }

}
