import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//routing
import { RouterModule, Routes } from '@angular/router';
//services
import { ShoppingListService } from './shared/shopping-list.service';
//components
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component'; 
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: 'recipes', component: RecipeListComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    //if you are not importing a component as a standalone, it needs to be added to the declarations array
    AppComponent,
  ],
  //if you are importing a component as a standalone, it needs to be added to the imports array
  imports: [BrowserModule, HeaderComponent, RecipeListComponent, RouterModule.forRoot(routes)],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
