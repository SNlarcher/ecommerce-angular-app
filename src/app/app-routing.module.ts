import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductDetailComponent } from './Pages/product-detail/product-detail.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"registro",component:RegisterComponent},
  {path:"ingreso",component:LoginComponent},
  {path:"producto/:id", component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
