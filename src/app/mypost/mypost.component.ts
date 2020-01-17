import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  details = [];
  p = 1;
  constructor(private api: ApiserviceService) { }
  getMyPost() {
    this.api.mypost().subscribe(
      data => {
        this.details = data.results;
        console.log(this.details, 'original');

      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getMyPost();
  }

}
