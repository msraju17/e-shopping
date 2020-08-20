import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ProductsData } from './data/products';
import { OrderHistoryData } from './data/order-history';
import { OrderHistoryService } from './services/order-history.service';
import { ShoppinCartService } from './services/shoppin-cart.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CategoryService } from './services/category.service';
import { ProductsService } from './services/products.service';
import { ProductsComponent } from './products/products.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CartComponent,
    OrdersComponent,
    NotfoundComponent,
    LoginComponent,
    AdminProductComponent,
    ProductFormComponent,
    ProductsComponent,
    ShippingComponent,
    PaymentComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '', component: ProductsComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'cart', component: CartComponent
      },
      {
        path: 'order',
        component: OrdersComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'shipping',
        component: ShippingComponent
      },
      {
        path: 'order-success',
        component: PaymentComponent
      },

      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'admin/products',
        component: AdminProductComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ]),
  ],
  providers: [
    ProductsService,
    AuthService,
    AuthGuardService,
    CategoryService,
    ShoppinCartService,
    OrderHistoryService,
    ProductsData,
    OrderHistoryData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
