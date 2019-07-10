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
    LogingoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService, SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
