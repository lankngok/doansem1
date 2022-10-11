import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { FaqComponent } from './page/faq/faq.component';
import { ContactComponent } from './page/contact/contact.component';
import { SigninComponent } from './page/signin/signin.component';
import { ManshopComponent } from './page/manshop/manshop.component';
import { WomanshopComponent } from './page/womanshop/womanshop.component';
import { DetailComponent } from './page/detail/detail.component';
import { CartComponent } from './page/cart/cart.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'manshop', component: ManshopComponent },
  { path: 'womanshop', component: WomanshopComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class CustomerRoutingModule {}
