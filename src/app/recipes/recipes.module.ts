import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeDetailsComponent,
        RecipeItemComponent
    ],
    imports:[
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
        CommonModule
    ],
    providers:[]
})
export class RecipeModule {}