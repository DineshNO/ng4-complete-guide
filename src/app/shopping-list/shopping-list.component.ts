import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import * as fromApp from '../store/app.reducer';
import * as shoppingListActions from './store/shopping-list.action';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromApp.AppState>) { }
  

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new shoppingListActions.StartEdit(index));
  }

}
