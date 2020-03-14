import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [];
  constructor() {
      this.ingredients = [
        new Ingredient("Apple",4),
        new Ingredient("Tomato",2)
      ]
   }

  ngOnInit() {
  }

  onIngAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

}
