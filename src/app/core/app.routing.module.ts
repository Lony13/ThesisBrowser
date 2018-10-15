import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {HomeDashboardComponent} from '../home-dashboard/home-dashboard.component';
import {AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import {ThesisDetailsComponent} from '../thesis-details/thesis-details.component';

const routes: Routes = [
  { path: 'home', component: HomeDashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent},
  { path: 'thesis/details', component: ThesisDetailsComponent},
  {path : '', component : HomeDashboardComponent}
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
