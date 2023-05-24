import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import {FoodModel} from '../../Models/FoodModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from './../../Models/TagModel';
import { Tags } from 'src/Data';

@Component({
  selector: 'app-display-food',
  templateUrl: './display-food.component.html',
  styleUrls: ['./display-food.component.scss']
})
export class DisplayFoodComponent implements OnInit {
  Foods: FoodModel[] = []
  tags: Tag[] = Tags;

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute, private router: Router
    ) {
    activatedRoute.params.subscribe((param) => {
      if(param["searchTerm"]){
        this.Foods = this.foodService.GetSearchFood(param["searchTerm"])
      }
      else if(param["tag"]){this.Foods = this.foodService.GetFoodsByTag(param["tag"])}
      else{
        this.Foods = foodService.getAllFood()
      }
    })
  }

  ngOnInit(): void {
  
  }
  ngDoCheck(){
    const localdata: any = localStorage.getItem('cart')
    const data: any = JSON.parse(localdata)
    console.log('cart---data', data)
  }
  
  TagHandler(tag: string){
    if(tag){
      this.router.navigateByUrl('/tag/' + tag)
    }
  }
}
