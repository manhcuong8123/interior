import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header-home/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SubscribeToOurComponent } from './components/subscribe-to-our/subscribe-to-our.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SidebarModule } from 'primeng/sidebar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { TreeSelectModule } from 'primeng/treeselect';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { DetailProductsComponent } from './pages/detail-products/detail-products.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductsComponent,
    HeaderPageComponent,
    AboutComponent,
    ContactComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    NotFoundComponent,
    ProductsListComponent,
    SubscribeToOurComponent,
    SignupComponent,
    SigninComponent,
    DetailProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule,
    ToggleButtonModule,
    ButtonModule,
    TreeSelectModule,
    SliderModule,
    FormsModule,
    InputNumberModule,
    PaginatorModule,
    TabViewModule,
    RatingModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
