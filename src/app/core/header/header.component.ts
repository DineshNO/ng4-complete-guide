import { HttpEvent } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { DataStorageService } from "../../shared/data-storage.service";
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    authState: Observable<fromAuth.State>;

    constructor(private dataStorage: DataStorageService, public store: Store<fromApp.AppState>) { }

    ngOnInit(){
        this.authState = this.store.select('auth');          
        this.store.select('auth')
            .subscribe(
                (data) => console.log("Authenticate :::::::::",data.authenticated)
            )                ;          

    }

    onSaveData() {
        this.dataStorage.storeRecipe()
            .subscribe(
                (response: HttpEvent<Object>) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorage.getRecipes();
    }

    onLogout() {
        //this.authService.signOut();
    }

}