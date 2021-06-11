import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
       
  }

  product : string = "Products List";
  imageWidth : number = 60;
  showImage : boolean = false;
  filterValue : string = "cart";

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


  clickImage() : void {
    this.showImage = !this.showImage;
  }


}
