import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Product, ProductDescription, ProductDetails } from '../../Interfaces/Products';
import { ProductDataService } from '../../product-data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!:Product | undefined
  id:string = ""
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductData:ProductDataService
  ){
    this.id = this.activatedRoute.snapshot.paramMap.get("id") || ""

    this.getProductDetails()
  }

  async getProductDetails() {
    try{
      const details:ProductDetails = await this.ProductData.getProductDetail( this.id )
      const description:ProductDescription = await this.ProductData.getProductDescription( this.id )
      this.product = {...details,...description}
      console.log(this.product);      
    }
    catch(e){console.log(e)}
  }

}
