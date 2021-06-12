import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../Interfaces/product';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn : "root"
})
export class ProductService {

  constructor(private http : HttpClient) { 

  }
  
  public getProducts() : Observable<IProduct[]>{
    let url = "http://localhost:8080/getProducts";             //pipe function is used to perform operations on the data returned by Observables
    return this.http.get<IProduct[]>(url).pipe(                //pipe function returns the Observable   
      tap((data : any)=> {                                     
        console.log(data);                                     //tap operator : used to handle data returned by Observable
      }),
      catchError((err : HttpErrorResponse) => {
        let errormessage = '';
       if(err.error instanceof ErrorEvent){                     //catchError operator : 1) used to handle client side and network error
             errormessage = `an unknown error occured ${err.error.message} `      //      2) used to handle unsuccessful response from server side
        }                                                                                                                     
       else{
             errormessage = "server side error. " + " Status code : " + err.status + " Error Message : " + err.error.Message + " Headers : " + err.headers.getAll;
        }
            return throwError(errormessage);
      })
    );
  }

}
/*
   synchronous : 
            when one process is going on without its completion, further process will not work
   asynchronous : 
            start for now and complete it later
            further code will not wait for asynchronous operation to complete
            
   using Observables we make http request as asynchronous
   
   why htttp request should be aysnchronous ?
          when you want to make multiple api call if request is synchronous, utill its response is arrived other request will not be made
          so using Observables we can perform asynchronous operation
   Observables : 
        flow of data over a specific period of time
        listens data over a period of time        

Observable wont work without subscribing
when we subscribe to Observable , the request will be submitted to the server 
further process will continue and when response is generated Observable provides data to the subscribers 
Observer is a Object and a decision maker
Observer will decide to call which method based on the type of data returned by Observable

  next() method ---> when required data is arrived
  error() method ---> when error data is arrived
  complete() method ---> when there is no data to send by Observables 

  how to subscribe :
       -->By subscribe() method
       -->subscribe(Observer object)
             ex : subscribe({
               next : (data) => {},
               error :(err) => {},
               complete : () => {}
             })

      another way :
             ex : subscribe(
               (data) => {

               }
               (err) => {

               }
               () => {

               }
             ) 
   
             
     how to unsubscribe :
          subscribe() method return Subscription
          so use unsubscribe() method in ngOnDestroy() method(Life cycle hook)
          because when component is destroyed there is no need to listen data fro observable so unsubscribe it      

*/