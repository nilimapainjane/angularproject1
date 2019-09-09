import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductServices} from '../../shared/services/product.services';
import{IproductData} from '../../model/productdata';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  constructor( private AR:ActivatedRoute, private ProductServices:ProductServices) { }
public id;
public filterdproductdata;
  ngOnInit() {

    this.AR.params
    .subscribe(data=>{
      this.id= data['productId'];

    })

    this.ProductServices.Product()
    .subscribe(data=>{this.filterdproductdata=data;
    });   

  }

}
