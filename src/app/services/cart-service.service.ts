import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FoodModel } from './../Models/FoodModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: FoodModel[] = [];
  private subject = new Subject<number>();
  url = 'http://localhost:5000'
  users: any = [];

  constructor(private http: HttpClient) { }

  CartHandler(food: FoodModel){
    const exists = localStorage.getItem('cart')
    let dataStoring: any = {};
    
    if(!exists)
    {
     dataStoring[food.id] = 1;
    }
    else{
     dataStoring = JSON.parse(exists)
     if(dataStoring[food.id])
     {
         const newcount = dataStoring[food.id] + 1;
         dataStoring[food.id] = newcount ;
     }
     else{
      dataStoring[food.id] = 1
     }
 
    }
    const stringdata = JSON.stringify(dataStoring);
    localStorage.setItem('cart', stringdata)
    this.CountItems()
  }

  CountItems(){
    const LocalItem = localStorage.getItem('cart');
    let totalItem = 0;
    if(LocalItem){
      const CartData = JSON.parse(LocalItem);
      const DataVal = Object.values(CartData);
      for(let val of DataVal){
        totalItem = totalItem + Number(val)
      }
    }
    this.subject.next(totalItem)
  }

  GetTotalItem(): Observable<number>{
    return this.subject.asObservable()
  }

}
