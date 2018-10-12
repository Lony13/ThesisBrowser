import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ThesisComponent } from '../thesisService/thesis.component';
import { FilterComponent } from '../filterService/filter.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './core/app.routing.module';
import {CustomMaterialModule} from './core/material.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './core/auth.service';
import {Interceptor} from './core/interceptor';
import {TokenStorage} from './core/token.storage';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: 'home', component: HomeDashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent},
  { path : '', component : HomeDashboardComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ThesisComponent,
    FilterComponent,
    LoginComponent,
    HomeDashboardComponent,
    AdminDashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CustomMaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [AuthService, TokenStorage, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
