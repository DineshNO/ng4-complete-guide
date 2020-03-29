import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AuthGuardService } from "../auth/auth-guard.service";
import { SharedModule } from "../shared/shared.module";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";
import { recipeReducer } from "./store/recipe.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RecipeEffects } from "./store/recipe.effect";



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
        CommonModule,
        StoreModule.forFeature('recipes',recipeReducer),
        EffectsModule.forFeature([RecipeEffects])
    ],
    providers:[AuthGuardService]
})
export class RecipesModule {}