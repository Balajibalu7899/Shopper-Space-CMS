import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './data-forms/category-form/category-form.component';
import { CouponsFormComponent } from './data-forms/coupons-form/coupons-form.component';
import { OfferFormComponent } from './data-forms/offer-form/offer-form.component';
import { OutletFormComponent } from './data-forms/outlet-form/outlet-form.component';
import { ProductFormComponent } from './data-forms/product-form/product-form.component';
import { StoreFormComponent } from './data-forms/store-form/store-form.component';
import { CategoriesComponent } from './pages/main/categories/categories.component';
import { DashBoardComponent } from './pages/main/dash-board/dash-board.component';
import { OffersComponent } from './pages/main/offers/offers.component';
import { OrdersComponent } from './pages/main/orders/orders.component';
import { OutletsComponent } from './pages/main/outlets/outlets.component';
import { ProductsComponent } from './pages/main/products/products.component';
import { ProfileComponent } from './pages/main/profile/profile.component';
import { StoresComponent } from './pages/main/stores/stores.component';
import { OrderDetailsComponent } from './pages/sub/order-details/order-details.component';
import { StoreDetailsComponent } from './pages/sub/store-details/store-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: "orders", component: OrdersComponent },
  { path: "stores", component: StoresComponent },
  { path: "products", component: ProductsComponent },
  { path: "outlets", component: OutletsComponent },
  { path: "offers", component: OffersComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "profile", component: ProfileComponent },
  { path: "order/:id", component: OrderDetailsComponent },
  { path: "stores/:id", component: StoreDetailsComponent },
  { path: "product/:action", component: ProductFormComponent },
  { path: "store/:action", component: StoreFormComponent },
  { path: "outlet/:action", component: OutletFormComponent },
  { path: "coupons/:action", component: CouponsFormComponent },
  { path: "offer/:action", component: OfferFormComponent },
  { path: "category/:action", component: CategoryFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
