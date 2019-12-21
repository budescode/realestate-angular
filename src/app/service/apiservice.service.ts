import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classfunction } from '../classfunction';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  countryDetailsUrl = 'http://anandrathi.pythonanywhere.com/adminapi/countrylistapi/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getcountryDetails(): Observable<any> {
    return this.http.get(this.countryDetailsUrl, {headers: this.httpHeaders});
   }
}
