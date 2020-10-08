import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {

  }
  ngOnInit(): void {
  
  console.log('ngOnInit');
  //console.log(this.recipes);
  
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
ngOnDestroy(){
  console.log('ngOnDestroy');
}
}
