import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { FoodService } from 'src/app/services/food.service';


@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {
  searchText: string = ''
  totalItems: number = 0;
  
  constructor(activatedRoute: ActivatedRoute, private router: Router, private cartService: CartServiceService, private foodService: FoodService) {
    activatedRoute.params.subscribe((param) => {
      if(param["searchTerm"]){
        this.searchText = param["searchTerm"]
      }
    }) 
   }

  ngOnInit(): void {
    this.cartService.GetTotalItem().subscribe((data) => {
      this.totalItems = data
    })
    this.cartService.CountItems();
    
  }

  searchHandler(term: string){
    if(term){
      this.router.navigateByUrl('/search/' + term)
    }
  }

}
