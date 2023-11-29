import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'recipes', pathMatch: 'full' }, // Default route within the empty path
      { path: 'recipes', component: RecipeListComponent },
      { path: 'shopping-list', component: ShoppingListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
