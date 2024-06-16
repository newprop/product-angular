import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { LoginComponent } from './Authentication/SecurityComponents/login/login.component';
import { RegisterComponent } from './Authentication/SecurityComponents/register/register.component';
import { AssignRoleComponent } from './Authentication/SecurityComponents/assign-role/assign-role.component';
import { AuthService } from './Authentication/SecurityModels/auth.service';

const routes: Routes = [
  { path: 'orders', component: OrderListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'assign-role', component: AssignRoleComponent },
  { path: '', redirectTo: '/orders', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    AssignRoleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [
    OrderService,
    ProductService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
