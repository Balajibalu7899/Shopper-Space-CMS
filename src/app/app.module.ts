import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

// Form Component

// Component Modules
import { DashBoardComponent } from './pages/main/dash-board/dash-board.component';
import { OrdersComponent } from './pages/main/orders/orders.component';
import { ProductsComponent } from './pages/main/products/products.component';
import { OutletsComponent } from './pages/main/outlets/outlets.component';
import { OffersComponent } from './pages/main/offers/offers.component';
import { CategoriesComponent } from './pages/main/categories/categories.component';
import { ProfileComponent } from './pages/main/profile/profile.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { ProductFormComponent } from './data-forms/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { CategoryFormComponent } from './data-forms/category-form/category-form.component';
import { OutletFormComponent } from './data-forms/outlet-form/outlet-form.component';
import { AddFormComponent } from './data-forms/add-form/add-form.component';
import { CouponsFormComponent } from './data-forms/coupons-form/coupons-form.component';
import { OfferFormComponent } from './data-forms/offer-form/offer-form.component';
import { CutFormComponent } from './data-forms/cut-form/cut-form.component';
import { SpecialFormComponent } from './data-forms/special-form/special-form.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { OrderDetailsComponent } from './pages/sub/order-details/order-details.component';
import { StoresComponent } from './pages/main/stores/stores.component';
import { StoreFormComponent } from './data-forms/store-form/store-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDetailsComponent } from './pages/sub/store-details/store-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    OrdersComponent,
    ProductsComponent,
    OutletsComponent,
    CategoriesComponent,
    ProfileComponent,
    SideMenuComponent,
    OffersComponent,
    ProductFormComponent,
    CategoryFormComponent,
    OutletFormComponent,
    AddFormComponent,
    CouponsFormComponent,
    OfferFormComponent,
    CutFormComponent,
    SpecialFormComponent,
    CategorySelectorComponent,
    ProductSelectorComponent,
    OrderDetailsComponent,
    StoresComponent,
    StoreFormComponent,
    StoreDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
