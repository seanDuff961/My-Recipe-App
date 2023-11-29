import {EventEmitter} from '@angular/core';
import {Ingredient} from './ingredient.model';

export class RecipeService {
    recipeCreated = new EventEmitter;
    private recipes: Ingredient[] = [
       
      ];
}