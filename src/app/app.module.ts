import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContentComponent } from './components/admin/content/content.component';
import { ControlSidebarComponent } from './components/admin/control-sidebar/control-sidebar.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { LeftSideComponent } from './components/admin/left-side/left-side.component';

import { AdminHomeComponent } from './components/admin/pages/admin-home/admin-home.component';
import { AdminProgramsComponent } from './components/admin/pages/admin-programs/admin-programs.component';

import { LoginComponent } from './components/login/login.component';
import { LogincardComponent } from './components/logincard/logincard.component';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { SystemService } from './services/System.service';
import { LogingoogleComponent } from './components/logingoogle/logingoogle.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SupplierDashboardComponent } from './components/supplier/pages/supplier-dashboard/supplier-dashboard.component';
import { ControlSidebarSupplierComponent } from './components/supplier/control-sidebar-supplier/control-sidebar-supplier.component';
import { FooterSupplierComponent } from './components/supplier/footer-supplier/footer-supplier.component';
import { HeaderSupplierComponent } from './components/supplier/header-supplier/header-supplier.component';
import { LeftSideSupplierComponent } from './components/supplier/left-side-supplier/left-side-supplier.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ControlSidebarRestaurantComponent } from './components/restaurant/control-sidebar-restaurant/control-sidebar-restaurant.component';
import { FooterRestaurantComponent } from './components/restaurant/footer-restaurant/footer-restaurant.component';
import { HeaderRestaurantComponent } from './components/restaurant/header-restaurant/header-restaurant.component';
import { LeftSidebarRestaurantComponent } from './components/restaurant/left-sidebar-restaurant/left-sidebar-restaurant.component';
import { RestaurantDashboardComponent } from './components/restaurant/restaurant-dashboard/restaurant-dashboard.component';
import { OrdersSupplierComponent } from './components/supplier/pages/orders-supplier/orders-supplier.component';
import { OrderService } from './services/Order.service';
import {PickListModule} from 'primeng/picklist';

import { NewOrderSupplierComponent } from './components/supplier/pages/new-order-supplier/new-order-supplier.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ContentComponent,
    ControlSidebarComponent,
    FooterComponent,
    HeaderComponent,
    LeftSideComponent,
    AdminHomeComponent,
    AdminProgramsComponent,
    LoginComponent,
    LogincardComponent,
    LogingoogleComponent,
    SupplierComponent,
    SupplierDashboardComponent,
    ControlSidebarSupplierComponent,
    FooterSupplierComponent,
    HeaderSupplierComponent,
    LeftSideSupplierComponent,
    RestaurantComponent,
    ControlSidebarRestaurantComponent,
    FooterRestaurantComponent,
    HeaderRestaurantComponent,
    LeftSidebarRestaurantComponent,
    RestaurantDashboardComponent,
    OrdersSupplierComponent,
    NewOrderSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    HttpModule,
    FormsModule,
    PickListModule
  ],
  providers: [DataService, SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
