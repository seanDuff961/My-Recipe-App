import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipe-list',
  imports: [CommonModule, RecipeItemComponent, RecipeDetailComponent], // importing a standalone component into another standalone component
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  standalone: true,
})
export class RecipeListComponent {
  constructor() {
    console.log('HelloWorld RecipeListComponent initialized')
  }
  selectedRecipeIndex: number | null = null;
  recipes = [
    {
      name: 'Big Fat Burger',
      description:
        '100% pure lean beef, fresh ground, grilled to perfection, and built-to-order. Served on a toasted sponge-dough bun.',
      imagePath:
        'https://fatburger.com/wp-content/uploads/sites/6/2022/11/Large-Kingburger-Fatburger-1024x1024.jpeg',
    },
    {
      name: 'Tasty Schnitzel',
      description:
        'This traditional Austrian recipe is popular in both Germany and Israel, as well as throughout the world.',
      imagePath: 'https://toriavey.com/images/2020/02/TOA20_03.jpeg',
    },
    // {"name": "Forest Trail", "description": "A serene path through a lush green forest", "imagePath": "https://via.placeholder.com/300.png?text=Forest+Trail"},
    // {"name": "Beach Sunset", "description": "A beautiful sunset over a sandy beach", "imagePath": "https://via.placeholder.com/300.png?text=Beach+Sunset"},
    // {"name": "Snowy Mountains", "description": "Snow-covered mountains against a winter sky", "imagePath": "https://via.placeholder.com/300.png?text=Snowy+Mountains"},
    // {"name": "Desert Dunes", "description": "Sweeping sand dunes under a hot desert sun", "imagePath": "https://via.placeholder.com/300.png?text=Desert+Dunes"},
    // {"name": "Tropical Beach", "description": "Palm trees and crystal clear water on a tropical beach", "imagePath": "https://via.placeholder.com/300.png?text=Tropical+Beach"},
    // {"name": "Autumn Park", "description": "A park with trees displaying vibrant autumn colors", "imagePath": "https://via.placeholder.com/300.png?text=Autumn+Park"},
    // {"name": "Winter Landscape", "description": "A peaceful winter scene with snow-covered trees", "imagePath": "https://via.placeholder.com/300.png?text=Winter+Landscape"},
    // {"name": "Spring Blossoms", "description": "Trees in full bloom with colorful spring blossoms", "imagePath": "https://via.placeholder.com/300.png?text=Spring+Blossoms"}
  ];

  onRecipeSelected(index: number) {
    this.selectedRecipeIndex = index;
  }

  resetSelectedRecipe() {
    this.selectedRecipeIndex = null;
  }
}
