import { Injectable } from '@angular/core';
import { FoodData, Tags } from './../../Data';
import { FoodModel } from './../Models/FoodModel';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood(): FoodModel[]{
    return FoodData
  }

  GetSearchFood(searchText: string){
    return this.getAllFood().filter(food => food.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
  }

  getAllTags(){
    return Tags
  }

  GetFoodsByTag(tag: string): FoodModel[]{
    return tag == 'All' ? this.getAllFood() : this.getAllFood().filter(food => food.tags?.includes(tag))
  }

  GetFoodById(id: string){
    return this.getAllFood().find(food => food.id === id)
  }
}
