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


  imageWidth : number = 60;
  showImage : boolean = false;

  products : any = [
    {
      "productName" : "mobile",
      "productCode" : 4539,
      "releaseDate" : "23/2/2021",
      "productPrice" : 234,
      "productRating": "good",
      "image" : "assets/images/mob.jpg"
    }
  ];


  clickImage() : void {
    this.showImage = !this.showImage;
  }


}
