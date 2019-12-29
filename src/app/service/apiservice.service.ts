import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classfunction } from '../classfunction';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  bedmin = 0;
  bedmax = 100;
  pricemin: 0;
  pricemax: 1000000000000000;
  name = 'DARWIN-NT_PARAP-NT_BARTON-ACT';
  propertytype = 'any';
  posterIdUser = '';
  countryDetailsUrl = 'https://anandrathi.pythonanywhere.com/adminapi/countrylistapi/';
  // filterUrl = 'http://anandrathi.pythonanywhere.com/indexapi/posterlistapi/';
  filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
  detailUrl = 'https://anandrathi.pythonanywhere.com/indexapi/detail?id=' + this.posterIdUser;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getcountryDetails(): Observable<any> {
    return this.http.get(this.countryDetailsUrl, {headers: this.httpHeaders});
   }
   getfilterDetails(datas): Observable<any> {
     const name = datas.name.trim().replace(';', '_').replace(' ', '');
     if (name === '') {
       this.name = 'Any';
       this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
       console.log('its any');
     } else {
       this.name = name;
       this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
       console.log('it has data', name);
     }
     if (datas.propertytype === '') {
       this.propertytype = 'Any';
       this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
       console.log('its no property');
     } else {
       this.propertytype = datas.propertytype.replace('&', '-').replace(/ /g, '%');
       this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
       console.log('it has property', this.propertytype, typeof(this.propertytype));
     }
     // this.filterUrl = this.filterUrl + '?name=' + name;
     // bedmin
     if (datas.bedmin === '') {
      this.bedmin = 0;
     } else if (datas.bedmin === 'Studio') {
      this.bedmin = 0;
      console.log('studio', this.bedmin);
     } else if (datas.bedmin === 'Any') {
      this.bedmin = 0;
      console.log('studio', this.bedmin);
     } else {
       this.bedmin = datas.bedmin;
       this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
       console.log('no naa', datas.bedmin, this.bedmin);
     }
     // bedmax
     if (datas.bedmax === '') {
      this.bedmax = 100;
     } else if (datas.bedmax === 'Studio') {
      this.bedmax = 100;
      console.log('studiobedmax', this.bedmax);
     } else if (datas.bedmax === 'Any') {
      this.bedmax = 100;
      console.log('studiobedmax', this.bedmax);
     } else {
       this.bedmax = datas.bedmax;
       this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
       console.log('no naa', datas.bedmin, this.bedmin);
     }
     // pricemin
     if (datas.pricemin === '') {
      this.pricemin = 0;
      this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
     } else if (datas.pricemin === 'Any') {
      this.pricemin = 0;
      this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
      console.log('priceany', this.pricemin);
     } else {
       this.pricemin = datas.pricemin.trim().substring(1).replace(',', '');
       this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
       console.log('no naapricemin', datas.pricemin, this.pricemin);
     }
     // pricemax
     if (datas.pricemax === '') {
      this.pricemax = 1000000000000000;
      this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
     } else if (datas.pricemax === 'Any') {
      this.pricemax = 1000000000000000;
      this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
      console.log('priceany', this.pricemax);
     } else {
       this.pricemax = datas.pricemax.trim().substring(1).replace(',', '');
       this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin='+ this.pricemin + '&name=' + this.name +'&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
       console.log('pricemaxpricemax', datas.pricemax, this.pricemax);
     }
     //console.log('filterurl', this.filterUrl, this.bedmax, this.pricemin, this.pricemax);
     localStorage.setItem('searchparams', this.filterUrl);
     console.log('these ate the data', datas.propertytype, datas, 'yeahh', this.filterUrl, 'Ive set it ooh');
     return this.http.get(this.filterUrl, {headers: this.httpHeaders});
   }
   getposterDetails(id): Observable<any> {
    this.detailUrl = 'https://anandrathi.pythonanywhere.com/indexapi/detail?id=' + id;
    return this.http.get(this.detailUrl, {headers: this.httpHeaders});
   }
}
