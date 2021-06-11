import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "converttoat"
})
export class ConvertToAtPipe implements PipeTransform{
    transform(value:string, character:string){
          return value.replace(character,"@");
    }
}