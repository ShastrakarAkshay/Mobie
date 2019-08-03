import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandProductsComponent } from './brand-products/brand-products.component';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products/:productId',
    component: BrandProductsComponent,
    children: [
      {
        path: 'viewProduct',
        component: ViewProductComponent
      }
    ]
  },
  {
    path: 'viewProduct',
    component: ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
