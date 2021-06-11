import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }

  product : string = "Products List";
  imageWidth : number = 60;
  showImage : boolean = false;
  //---------------------------------------------------
  private _filterValue : string = "";
  get filter() : string {
    return this._filterValue;
  }
  set filter(filterValue : string){
    this._filterValue = filterValue;
    this.filteredProducts = this.filtering(filterValue);
  }
  
  //----------------------------------------------------
   
  products : IProduct[] = [
    {
      "productName" : "Mobile",
      "productCode" : "gj#4539",
      "releaseDate" : "23/2/2021",
      "productPrice" : "23400",
      "productRating": "4.1",
      "image" : "assets/images/mob.jpg"
    },
    {
      "productName" : "Laptop",
      "productCode" : "jo#235",
      "releaseDate" : "22/3/2021",
      "productPrice": "50000",
      "productRating": "4.3",
      "image" : "assets/images/la.jpg"
    }
  ];

   get Products() : IProduct[]{
     return this.products;
   }

   set Products(pro : IProduct[]){
     this.products=pro;
   } 
   filteredProducts : IProduct[] = this.Products;

  //---------------------------------methods---------------------------------------

  filtering(value : string) : IProduct[] {
    let prod = this.products.filter((pro :IProduct) => {
     return pro.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
    return prod;
  }

  clickImage() : void {
    this.showImage = !this.showImage;
  }


}
