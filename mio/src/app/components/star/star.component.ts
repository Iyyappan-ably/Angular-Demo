import { Component, Input, OnChanges, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
     this.cropWidth = this.rating * (75/5);
  }
 @Input() rating : number =0;
 cropWidth : number = 75;

 @Output() emitter : EventEmitter<string> = new EventEmitter<string>();


 emit(){
   this.emitter.emit("The Rating is :" + this.rating);
 }


}
