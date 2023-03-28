import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from "rxjs";
import { ProductDescription, ProductDetails, SearchResponse } from './Interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(
    private http:HttpClient
  ) { }

  getProducts( searching:string ):Promise<SearchResponse> {
    return lastValueFrom( this.http.get<SearchResponse>(`https://api.mercadolibre.com/sites/MLA/search?q=${searching}`) )
  }

  getProductDetail(id:string):Promise<ProductDetails> {
    return lastValueFrom( this.http.get<ProductDetails>(`https://api.mercadolibre.com/items/${id}`) )
  }

  getProductDescription(id:string):Promise<ProductDescription> {
    return lastValueFrom( this.http.get<ProductDescription>(`https://api.mercadolibre.com/items/${id}/description`) )
  }

}
