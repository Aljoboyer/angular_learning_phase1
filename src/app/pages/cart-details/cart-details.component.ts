import { Component, OnInit } from '@angular/core';
import { FoodModel } from 'src/app/Models/FoodModel';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  cartData: FoodModel[] | any = []
  cartFood: FoodModel[] = []

  constructor(private foodservice: FoodService) { }

  ngOnInit(): void {
    this.GetCartData()
  }
  GetCartData(){
    const localData: any = localStorage.getItem('cart');
    const storeData = JSON.parse(localData);
    const newCart: FoodModel[] = []
    const DataVal = Object.values(storeData)
    const DataKey = Object.keys(storeData);

    for(let k of DataKey){
      const data: FoodModel | any = this.foodservice.getAllFood().find((fod) => fod.id === k)
      this.cartData.push(data)
    }
    if(this.cartData.length > 0){
      for(const key in storeData)
            {
                const food = this.foodservice.getAllFood().find(food => food.id === key);
                if(food){
                    const Quantity = storeData[key];
                    food.quantity = Quantity;
                    newCart.push(food)
                }
            }
            this.cartFood = newCart
    }
  }

  
  
}
