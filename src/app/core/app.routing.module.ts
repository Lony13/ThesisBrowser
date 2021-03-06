import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {HomeDashboardComponent} from '../home-dashboard/home-dashboard.component';
import {AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import {ThesisDetailsComponent} from '../thesis-details/thesis-details.component';
import {AuthGuard} from './authGuard';

const routes: Routes = [
  {path: 'home', component: HomeDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'thesis/details/:id', component: ThesisDetailsComponent},
  {path: '', component: HomeDashboardComponent}
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
export class AppRoutingModule {
}
