import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './Authentication/SecurityComponents/login/login.component';
import { RegisterComponent } from './Authentication/SecurityComponents/register/register.component';
import { AssignRoleComponent } from './Authentication/SecurityComponents/assign-role/assign-role.component';

const routes: Routes = [
  { path: 'orders', component: OrderListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'assign-role', component: AssignRoleComponent },
  { path: '', redirectTo: '/orders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
