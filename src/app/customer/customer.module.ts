import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './page/home/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { BannerComponent } from './page/banner/banner.component';
import { FlashsaleComponent } from './page/flashsale/flashsale.component';
import { TopsaleComponent } from './page/topsale/topsale.component';
import { AboutComponent } from './page/about/about.component';
import { FaqComponent } from './page/faq/faq.component';
import { ContactComponent } from './page/contact/contact.component';
import { SigninComponent } from './page/signin/signin.component';
import { ManshopComponent } from './page/manshop/manshop.component';
import { WomanshopComponent } from './page/womanshop/womanshop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './page/detail/detail.component';
  import { CartComponent } from './page/cart/cart.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    FlashsaleComponent,
    TopsaleComponent,
    AboutComponent,
    FaqComponent,
    ContactComponent,
    SigninComponent,
    ManshopComponent,
    WomanshopComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [

CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class CustomerModule {}
