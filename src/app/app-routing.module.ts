import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsFoodComponent } from './components/details-food/details-food.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { DisplayFoodComponent } from './pages/display-food/display-food.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardPage1Component } from './pages/dashboard/dashboard-page1/dashboard-page1.component';
import { DashboardPage2Component } from './pages/dashboard/dashboard-page2/dashboard-page2.component';
import { DashboardPage3Component } from './pages/dashboard/dashboard-page3/dashboard-page3.component';
import { getLocaleEraNames } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardGuard } from './components/auth-guard.guard';
import { CreateUserComponent } from './pages2/create-user/create-user.component';
import { DisplayUserComponent } from './pages2/display-user/display-user.component';

const routes: Routes = [
  {path: '',  component: DisplayFoodComponent, canActivate: [AuthGuardGuard]},
  {path: 'search/:searchTerm',  component: DisplayFoodComponent, canActivate: [AuthGuardGuard]},
  {path: 'tag/:tag',  component: DisplayFoodComponent},
  {path: 'food/:id',  component: DetailsFoodComponent},
  {path: 'cart',  component: CartDetailsComponent},
  {path: 'dashboard',  component: DashboardComponent, children:[
    {path: 'home',  component: DashboardPage1Component},
    {path: 'page2',  component: DashboardPage2Component},
    {path: 'page3',  component: DashboardPage3Component},
  ]},
  {path: 'login',  component: LoginPageComponent},
  {path: 'create-user',  component: CreateUserComponent},
  {path: 'all-users',  component: DisplayUserComponent},
];
getLocaleEraNames
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
