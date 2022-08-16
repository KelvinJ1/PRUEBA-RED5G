import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: "",redirectTo: "/ventas",pathMatch:"full"},
  
  {path:"ventas", component:ProductsComponent} ,
  {path:"categorias", component:CategoriesComponent} ,
  {path:"productos", component:ProductsComponent} ,
  
  
  
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],exports: [RouterModule],
})
export class AppRoutingModule { }
