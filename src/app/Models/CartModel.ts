import { FoodModel } from './FoodModel';

export interface CartModel{
    food: FoodModel,
    quantity: number,
    price: number
}