import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';  // Import your RecipeListComponent here
// import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    //if you are not importing a component as a standalone, it needs to be added to the declarations array
    AppComponent,
    // HeaderComponent,
    // RecipeListComponent,  // Add your RecipeListComponent to the declarations array
  ],
  //if you are importing a component as a standalone, it needs to be added to the imports array
  imports: [BrowserModule, HeaderComponent, RecipeListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
