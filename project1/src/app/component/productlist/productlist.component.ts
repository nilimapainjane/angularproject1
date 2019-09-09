import { Component, OnInit } from '@angular/core';

import {ProductServices} from '../../shared/services/product.services'
import{IproductData} from '../../model/productdata'
//import { filterPipe } from '../../shared/filter.pipe';
import{ Search } from '../../model/search.template'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  //public model=new Search();



  public flag:boolean=true;
  public FilterValue=1;

  constructor(private ProductServices:ProductServices) { }

  public productlist:IproductData[]
  ngOnInit() {
    this.ProductServices.Product()
    .subscribe(data=>{this.productlist=data;
    console.log(data) });      
    
  }

  image(){
     
    this.flag=!this.flag;

  }


}
