import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      recipeName: 'Pancakes',
      timeToCook: '30 min',
      imageUrl: 'src\assets\images\Pancakes.png',
      ingredients: ['2 eggs', '200 ml milk', '12 spoons milk', '1 stick butter']
    },
    {
      id: 'r2',
      recipeName: 'Spagetti',
      timeToCook: '45 min',
      imageUrl: 'src\assets\images\Spagetti.png',
      ingredients: ['1 pkg spagetti', '1 p ground meat', 'tomato sauce', '100 g cheese']
    }
  ]
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
