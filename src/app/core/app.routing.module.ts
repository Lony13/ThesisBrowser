import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {HomeDashboardComponent} from '../home-dashboard/home-dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeDashboardComponent},
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
