import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductItemComponent } from './product-item/product-item.component';
import { AllProductListComponent } from './all-product-list/all-product-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: AllProductListComponent },
  { path: 'categories/:categoryId/products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
