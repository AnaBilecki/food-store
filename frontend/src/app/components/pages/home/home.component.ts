import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
