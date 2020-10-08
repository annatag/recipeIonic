import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailPage } from './recipe-detail.page';

const routes: Routes = [
  {
    path: ':recipeId',
    component: RecipeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeDetailPageRoutingModule {}
