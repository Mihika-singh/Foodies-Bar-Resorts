import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodDisplayComponent } from './food-display/food-display.component';
import { ServicesDisplayComponent } from './services-display/services-display.component';
import { AmenitesDisplayComponent } from './amenites-display/amenites-display.component';
import { FeedbackDisplayComponent } from './feedback-display/feedback-display.component';
import { FooterDisplayComponent } from './footer-display/footer-display.component';
import { NavDisplayComponent } from './nav-display/nav-display.component';
import { FoodViewComponent } from './food-view1/food-view.component';
import { routingTable } from './routes';
import { Food2Component } from './food2/food2.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { Food3Component } from './food3/food3.component';
import { Food4Component } from './food4/food4.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { BookTableComponent } from './book-table/book-table.component';
import { TotalItemsComponent } from './total-items/total-items.component';
import { BookServiceComponent } from './book-service/book-service.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FoodDisplayComponent,
    ServicesDisplayComponent,
    AmenitesDisplayComponent,
    FeedbackDisplayComponent,
    FooterDisplayComponent,
    NavDisplayComponent,
    FoodViewComponent,
    Food2Component,
    HomeComponent,
    BannerComponent,
    Food3Component,
    Food4Component,
    BookRoomComponent,
    BookTableComponent,
    TotalItemsComponent,
    BookServiceComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     
    RouterModule.forRoot(routingTable)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
