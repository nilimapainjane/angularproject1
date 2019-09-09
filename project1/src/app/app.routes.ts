import {Route} from '@angular/router'
import { HomeComponent } from './component/home/home.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';

export const routes:Route[]=[
    {
      path:'',
      component:HomeComponent
    },
    {

    path:'home',
    component:HomeComponent
},
{
    path:'productlist',
    component:ProductlistComponent
},
{
path:'productdetails/:productId',
component:ProductdetailsComponent

}



]