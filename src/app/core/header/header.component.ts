import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as AuthActions from '../../auth/store/auth.action';
import * as fromAuth from '../../auth/store/auth.reducer';
import * as RecipeActions from '../../recipes/store/recipe.action';
import * as fromApp from '../../store/app.reducer';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    authState: Observable<fromAuth.State>;

    constructor(public store: Store<fromApp.AppState>) { }

    ngOnInit() {
        this.authState = this.store.select('auth');
    }

    onSaveData() {
        this.store.dispatch(new RecipeActions.StoreRecipes());
    }

    onFetchData() {
        this.store.dispatch(new RecipeActions.FetchRecipes())
    }

    onLogout() {
        this.store.dispatch(new AuthActions.Logout())
    }

}