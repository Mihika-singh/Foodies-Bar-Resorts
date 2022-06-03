import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FoodDisplayComponent } from './food-display/food-display.component';
import { ServicesDisplayComponent } from './services-display/services-display.component';
import { AmenitesDisplayComponent } from './amenites-display/amenites-display.component';
import { FeedbackDisplayComponent } from './feedback-display/feedback-display.component';
import { FooterDisplayComponent } from './footer-display/footer-display.component';
import { NavDisplayComponent } from './nav-display/nav-display.component';

import { routingTable } from './routes';

import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';



import { TotalItemsComponent } from './total-items/total-items.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { FoodsDetailComponent } from './foods-detail/foods-detail.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { LoginComponent } from './login/login.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { PaymentComponent } from './payment/payment.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodDisplayComponent,
    ServicesDisplayComponent,
    AmenitesDisplayComponent,
    FeedbackDisplayComponent,
    FooterDisplayComponent,
    NavDisplayComponent,

    HomeComponent,
    BannerComponent,


    TotalItemsComponent,
    BookServiceComponent,
    FoodsDetailComponent,
    FeedbackFormComponent,
    LoginComponent,
    ServiceDetailsComponent,
    PaymentComponent,
    HelpComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routingTable)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
