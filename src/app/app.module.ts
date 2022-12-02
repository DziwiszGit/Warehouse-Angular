import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './components/login/login.component';
import { WarehousemenComponent } from './components/warehousemen/warehousemen.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import { SignupComponent } from './components/signup/signup.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { LogoutComponent } from './components/logout/logout.component';
import {RouterModule} from "@angular/router";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {AuthResolver} from "./resolver/auth.resolver";


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    WarehousemenComponent,
    ProductsComponent,
    HomeComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor},
    {provide:APP_INITIALIZER, multi: true, useFactory: function (http: HttpClient) {
        return new AuthResolver(http).loadUserData
      }, deps: [HttpClient]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
