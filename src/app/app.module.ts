import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [

  {
    path: 'index',
    component: IndexComponent,
  },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
