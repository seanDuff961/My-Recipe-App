import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})

export class RecipeItemComponent {
  @Input() index!: number;
  @Input() recipe: any;
  @Output() recipeSelected = new EventEmitter<number>();

  selectRecipe(selectedIndex: number) {
    this.recipeSelected.emit(selectedIndex);
  }
}
