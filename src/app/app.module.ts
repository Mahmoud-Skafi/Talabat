import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from './guard/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { TokenService } from './guard/token.service';
import { RestaurantService } from './services/restaurant.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestaurantsManagerComponent } from './restaurants-manager/restaurants-manager.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewRestaurntsComponent } from './restaurants-manager/view-restaurnts/view-restaurnts.component';
import {NgxPrintModule} from 'ngx-print';
import { EditRestaurntsComponent } from './restaurants-manager/edit-restaurnts/edit-restaurnts.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AutosizeModule} from 'ngx-autosize';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardComponent,
    NavbarComponent,
    RestaurantsManagerComponent,
    // ViewRestaurants,
    // ViewComponent,
    ViewRestaurntsComponent,
    EditRestaurntsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    MatTableModule,
    MatDialogModule,
    NgxPrintModule,
    MatFormFieldModule,
    AutosizeModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    RestaurantService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
