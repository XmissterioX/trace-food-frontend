import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/pages/admin-home/admin-home.component';
import { AdminProgramsComponent } from './components/admin/pages/admin-programs/admin-programs.component';

import { LoginComponent } from './components/login/login.component';
import { LogincardComponent } from './components/logincard/logincard.component';
import { LogingoogleComponent } from './components/logingoogle/logingoogle.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SupplierDashboardComponent } from './components/supplier/pages/supplier-dashboard/supplier-dashboard.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { OrdersSupplierComponent } from './components/supplier/pages/orders-supplier/orders-supplier.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logingoogle',
    pathMatch: 'full'
  },
  {
    path: 'supplier',
    component: SupplierComponent,
    children: [
      {
        path: '',
        redirectTo: 'supplier-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'supplier-dashboard',
        component: SupplierDashboardComponent
      },
      {
        path: 'orders-supplier',
        component: OrdersSupplierComponent
      }
    ]
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
    children: [
      {
        path: '',
        redirectTo: 'supplier-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'supplier-dashboard',
        component: SupplierDashboardComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-home',
        pathMatch: 'full'
      },
      {
        path: 'admin-home',
        component: AdminHomeComponent
      },
      {
        path: 'admin-programs',
        component: AdminProgramsComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'logincard', component: LogincardComponent },
  { path: 'logingoogle', component: LogingoogleComponent },
  { path: 'logingoogle', component: LogingoogleComponent },
  {
    path: '**',
    redirectTo: 'logingoolge',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
