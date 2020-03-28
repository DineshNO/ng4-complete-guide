import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list/shopping-list-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListReducer } from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    ShoppingListRoutingModule,
    CommonModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot({shoppingList :ShoppingListReducer})
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
