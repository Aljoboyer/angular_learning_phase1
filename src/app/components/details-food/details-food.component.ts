import { Component, OnInit } from '@angular/core';
import { FoodService } from './../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { FoodModel } from './../../Models/FoodModel';
import { CartServiceService } from './../../services/cart-service.service';

@Component({
  selector: 'app-details-food',
  templateUrl: './details-food.component.html',
  styleUrls: ['./details-food.component.scss']
})
export class DetailsFoodComponent implements OnInit {
  food: FoodModel = {
    id: '',
    name: '',
    price: 0,
    tags: [],
    favorite: false,
    stars: 0,
    imageUrl: '',
    origins: [],
    cookTime: '',
    quantity: 0,
  }

  cart: FoodModel[] = [];

  constructor(foodservice: FoodService, activateRoute: ActivatedRoute, public cartService: CartServiceService) {
      activateRoute.params.subscribe((param) => {
       this.food = foodservice.GetFoodById(param['id']) !
      })
   }

  ngOnInit(): void {

  }

  AddToCartHanlder(food: any){
    this.cartService.CartHandler(food)
  }

}
