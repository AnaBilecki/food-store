import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(
    private activedRoute: ActivatedRoute,
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      if (params.id) {
        this.food =  this.foodService.getFoodById(params.id);
      }
    });
  }

}
