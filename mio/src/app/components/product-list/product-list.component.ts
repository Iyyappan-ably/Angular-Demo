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


  products : any = [
    {
      "productName" : "mobile",
      "productCode" : 4539,
      "releaseDate" : "23/2/2021",
      "productPrice" : 234,
      "productRating": "good"
    }
  ];





}
