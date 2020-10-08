import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from 'src/app/recipe.model';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('recipeId')){
        this.router.navigate(['/tabs/tab2']);
        return;
      }
      const recipeId = paraMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }


  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'Cancel' },
      {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/tabs/tab2']);
        }
      }]
   }).then(alertEl => {
     alertEl.present();
   });

}

ionViewWillEnter() {
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
