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
import { LoginComponent } from './login/login.component';

import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { NgxPaginationModule } from 'ngx-pagination';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SellComponent } from './sell/sell.component';
import { LogoutComponent } from './logout/logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [

  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'sell',
    component: SellComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1415669241944851')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FilterComponent,
    DetailComponent,
    MapsearchComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent,
    SellComponent,
    LogoutComponent,
    NavbarComponent
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
    SocialLoginModule, // social authentication
    NgxPaginationModule,
    NgbModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
