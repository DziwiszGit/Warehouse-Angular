import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {ProductsComponent} from "./components/products/products.component";
import {WarehousemenComponent} from "./components/warehousemen/warehousemen.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {SignupComponent} from "./components/signup/signup.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'products', component:ProductsComponent},
  {path:'warehousemen', component:WarehousemenComponent},
  {path:'logout', component:LogoutComponent},
  {path:'signup', component:SignupComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
