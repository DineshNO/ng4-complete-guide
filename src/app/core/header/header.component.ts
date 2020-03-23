import { Component } from "@angular/core";
import { HttpEvent } from "@angular/common/http";
import { Authservice } from "../../auth/auth.service";
import { DataStorageService } from "../../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    constructor(private dataStorage: DataStorageService,
        public authService : Authservice) { }
    onSaveData() {
        this.dataStorage.storeRecipe()
            .subscribe(
                (response: HttpEvent<Object>) => { 
                    console.log(response);
                }
            );
    }

    onFetchData(){
        this.dataStorage.getRecipes();
    }

    onLogout(){
        this.authService.signOut();
    }

}