import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoMainComponent } from './pages/todo-main/todo-main.component';
import { CreateTodoComponent } from './pages/create-todo/create-todo.component';
import { TodoComponent } from './pages/todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarsComponent } from './components/navbars/navbars.component';
import { DisplayFoodComponent } from './pages/display-food/display-food.component';
import { FoodComponent } from './components/food/food.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { DetailsFoodComponent } from './components/details-food/details-food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardPage1Component } from './pages/dashboard/dashboard-page1/dashboard-page1.component';
import { DashboardPage2Component } from './pages/dashboard/dashboard-page2/dashboard-page2.component';
import { DashboardPage3Component } from './pages/dashboard/dashboard-page3/dashboard-page3.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateUserComponent } from './pages2/create-user/create-user.component';
import { DisplayUserComponent } from './pages2/display-user/display-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalsComponent } from './pages2/modals/modals.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { UpdateUserComponent } from './pages2/update-user/update-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    TodoMainComponent,
    CreateTodoComponent,
    TodoComponent,
    NavbarsComponent,
    DisplayFoodComponent,
    FoodComponent,
    StarRatingComponent,
    DetailsFoodComponent,
    CartDetailsComponent,
    DashboardComponent,
    DashboardPage1Component,
    DashboardPage2Component,
    DashboardPage3Component,
    LoginPageComponent,
    CreateUserComponent,
    DisplayUserComponent,
    ModalsComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
