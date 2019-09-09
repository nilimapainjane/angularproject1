


import { Pipe , PipeTransform} from '@angular/core';

@Pipe({
    name:'productfilter'
})


export class productidfilter{

    transform(items: any[], field : number, value : number){    
      
    if (!items) return [];    

    return items.filter(it => 
        it[field]==value);
   
    }
}