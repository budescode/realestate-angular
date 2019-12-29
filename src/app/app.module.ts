import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { DetailComponent } from './detail/detail.component';

import { AgmCoreModule } from '@agm/core';
import { MapsearchComponent } from './mapsearch/mapsearch.component';


const appRoutes: Routes = [

  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'mapsearch',
    component: MapsearchComponent,
  }

];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FilterComponent,
    DetailComponent,
    MapsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only #AIzaSyBfZ86mdGX5E7o4PGSB7ct22axSb_JzVTY
    ),
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderRouterModule, // import NgxUiLoaderRouterModule. By default, it will show foreground loader.
    NgxUiLoaderHttpModule, // import NgxUiLoaderHttpModule. By default, it will show background loader.
    // NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfZ86mdGX5E7o4PGSB7ct22axSb_JzVTY'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
