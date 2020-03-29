import { HttpEvent } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { DataStorageService } from "../../shared/data-storage.service";
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer';
import * as AuthActions from '../../auth/store/auth.action';
import * as RecipeActions from '../../recipes/store/recipe.action'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    authState: Observable<fromAuth.State>;

    constructor(private dataStorage: DataStorageService, public store: Store<fromApp.AppState>) { }

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