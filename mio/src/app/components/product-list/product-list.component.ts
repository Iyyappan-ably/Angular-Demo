import { Component, OnInit } from '@angular/core';

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

  products : any = [
    {
      "productName" : "mobile",
      "productCode" : 4539,
      "releaseDate" : "23/2/2021",
      "productPrice" : "23400",
      "productRating": "good",
      "image" : "assets/images/mob.jpg"
    },
    {
      "productName" : "Laptop",
      "productCode" : 4235,
      "releaseDate" : "22/3/2021",
      "productPrice": "50000",
      "productRating": "good",
      "image" : "assets/images/la.jpg"
    }

  ];


  clickImage() : void {
    this.showImage = !this.showImage;
  }


}
