import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  details = [{longitude: 51.678418, latitude: 7.809007}];
  latitude = 51.678418;
  longitude = 7.809007;
}
