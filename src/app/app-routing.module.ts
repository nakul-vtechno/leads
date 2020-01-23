import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ManageProductComponent } from './pages/manage-product/manage-product.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'manage-products', component: ManageProductComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
