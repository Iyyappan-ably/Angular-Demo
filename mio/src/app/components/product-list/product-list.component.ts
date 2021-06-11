import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { 

  }
  ngOnInit(){

    this.productService.getProducts().subscribe(
      
      (req : IProduct[])=>{
          console.log("required data arrived");
          this.Products = req;
          this.filteredProducts = this.Products;      //next method
      },
      (err : any)=>{
          console.log("error");                       //error method
      },
      ()=>{
          console.log("no data ");                     //complete method
      }
    )
  }

  //-----------------------------------------

  product : string = "Products List";
  
  imageWidth : number = 60;
  
  products : IProduct[] = [];
  get Products() : IProduct[]{
    return this.products;
  }
  set Products(pro : IProduct[]){
    this.products=pro;
  } 
  
  filteredProducts : IProduct[] = [];

  showImage : boolean = false;
  
  private _filterValue : string = "";
  get filter() : string {
    return this._filterValue;
  }
  set filter(filterValue : string){
    this._filterValue = filterValue;
    this.filteredProducts = this.filtering(filterValue);
  }
  
  collectedValue : string = '';


  //---------------------------------methods---------------------------------------
  clickImage() : void {
    this.showImage = !this.showImage;
  }

  filtering(value : string) : IProduct[] {
    let prod = this.products.filter((pro :IProduct) => {
     return pro.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
    return prod;
  }

  
  collect(val : string){
      this.collectedValue=val;    
  }
   

}
