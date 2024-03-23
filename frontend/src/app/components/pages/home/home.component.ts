import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public foods: Food[] = [];

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
