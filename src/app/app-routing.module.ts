import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';

import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { MenuManagerComponent } from './menu-manager/menu-manager.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { OrdersManagerComponent } from './orders-manager/orders-manager.component';
import { RestaurantMenusComponent } from './restaurant-menus/restaurant-menus.component';
import { RestaurantsManagerComponent } from './restaurants-manager/restaurants-manager.component';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';
const routes: Routes = [
  {
    path:'ps/restaurants',
    component:RestaurantsPageComponent,
  },
  {
    path:'login',
    component:CustomerLoginComponent
  },
  {
    path:'admin/login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,canActivate:[AuthGuard]
  },
  {
    path:'restaurants',
    component:RestaurantsManagerComponent,canActivate:[AuthGuard]
  },

  {
    path:'menus',
    component:MenuManagerComponent,canActivate:[AuthGuard]
  },
  {
    path:'orders',
    component:OrdersManagerComponent,canActivate:[AuthGuard]
  },
  {
    path:'customers',
    component:CustomerManagerComponent,canActivate:[AuthGuard]
  },
  {
    path:'ps/menu/:id',
    component:MenuPageComponent
  },
  {
    path:'ps/restaurants/:id',
    component:RestaurantMenusComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
