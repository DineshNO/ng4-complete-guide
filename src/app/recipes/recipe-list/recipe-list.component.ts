import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Idli", "Indian food", "https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg"),
    new Recipe("Dosa", "Indian food", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dosa_and_ghee.jpg/1280px-Dosa_and_ghee.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelecetd(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
