import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { SearchingBarComponent } from './searching-bar/searching-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    CartComponent,
    CategoriesComponent,
    ProductsComponent,
    SearchingBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
