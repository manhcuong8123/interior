import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DetailProductsComponent } from './pages/detail-products/detail-products.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'vippro', children: [
      { path: '', redirectTo: 'signin', pathMatch: "full" },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ]
  },
  { path: 'admin', component: AdminLayoutComponent, canActivate: [AuthGuard] },

  {
    path: 'page', component: ClientLayoutComponent, children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/detail/:id', component: DetailProductsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'cart', component: CartComponent }
    ]
  },
  { path: 'admin', component: AdminLayoutComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
