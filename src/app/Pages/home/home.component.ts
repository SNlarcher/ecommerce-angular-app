import { Component } from '@angular/core';
import { ProductDataService } from '../../product-data.service';
import { SearchResponse } from '../../Interfaces/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products!:SearchResponse
  searching:string = 'laptop'
  newSearch:string = ''

  constructor( private ProductData:ProductDataService ){
  
  this.getProductsData()
  }

  getProductsData =async () => {
    this.products = await this.ProductData.getProducts( this.searching )
    console.log(this.products);
  }
  
  search() {
    this.searching = this.newSearch
    this.getProductsData()
  }

  pressEnter(event:any) {
    if(event.keyCode === 13){
      this.search()
    }
  }

  


}
