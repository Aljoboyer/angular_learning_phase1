import { Component, Input, OnInit } from '@angular/core';
import {FoodModel} from '../../Models/FoodModel'
import { FoodService } from './../../services/food.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  @Input() food!: FoodModel;

  constructor( private router: Router) {
      
   }

  ngOnInit(): void {
  }
  FoodDetailsHandler(id: string){
    this.router.navigateByUrl('/food/' + id)
  }
}
