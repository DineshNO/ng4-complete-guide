import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthModule } from './auth/auth.module';
import { Authservice } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list/shopping-list-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    ShoppingListRoutingModule,
    CommonModule,
    AuthModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    Authservice,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
