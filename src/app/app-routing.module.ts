import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';



const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'dashboard' ,component:DashboardComponent},
  {path:'admindashboard' ,component:AdminDashboardComponent, canActivate:[AuthGuard, AdminGuard]},
  {path:'UserDashboard' ,component:UserDashboardComponent},
  {path:'UserRegistration' ,component:UserRegistrationComponent},
  {path: '**', component: PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
