

import{Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ IproductData } from '../../model/productdata';
import { Observable } from 'rxjs';


@Injectable({providedIn:'root'})
export class ProductServices
{

    public productlist:string='../../../assets/productapi.json';

    constructor(private http:HttpClient)
    {}
    
    Product():Observable<IproductData[]>
    {
        return this.http.get<IproductData[]>(this.productlist);
    }


}

