import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { Card1Component } from './card1/card1.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 { path : '', component: HomeComponent, pathMatch:'full'},
 { path : 'home', component: HomeComponent},
 { path : 'shop', component: ShopComponent},
 { path : 'shop/id', component: ShopDetailComponent},
 { path : 'card', component: Card1Component},
 { path : 'checkout', component: CheckoutComponent},
 { path : 'testimonial', component: TestimonialComponent},
 { path : 'contact', component: ContactComponent},
 { path : 'cart', component: CartComponent},
 { path : 'login', component: LoginComponent},
 { path : 'register', component: RegisterComponent},
 { path : '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
