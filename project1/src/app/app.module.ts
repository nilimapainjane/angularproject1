import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeComponent } from './component/home/home.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import {RouterModule} from '@angular/router';
import {routes} from '../app/app.routes';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './shared/filter.pipes';
import {FormsModule} from '@angular/forms';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component'
import { productidfilter } from './shared/productidfilter.pipes';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductlistComponent,
    FilterPipe,
    ProductdetailsComponent,
    productidfilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
