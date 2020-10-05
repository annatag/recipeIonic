import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {

  }
  ngOnInit(): void {
  this.recipes = this.recipesService.getAllRecipes();
  }

}
