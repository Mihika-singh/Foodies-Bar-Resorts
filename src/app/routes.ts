

import { BookRoomComponent } from './book-room/book-room.component';
import { BookTableComponent } from './book-table/book-table.component';
import { FoodDisplayComponent } from './food-display/food-display.component';

import { FoodViewComponent } from './food-view1/food-view.component';
import { Food2Component } from './food2/food2.component';
import { Food3Component } from './food3/food3.component';
import { Food4Component } from './food4/food4.component';
import { HomeComponent } from './home/home.component';
import { ServicesDisplayComponent } from './services-display/services-display.component';





export const routingTable = [
   { path: '', component: HomeComponent },
   { path: '', redirectTo: '/', pathMatch: 'full' },

   { path: 'foods', component: FoodDisplayComponent },
   { path: 'north/:id', component: FoodViewComponent },
   { path: 'south/:id', component: Food2Component },
   { path: 'pizza/:id', component: Food3Component },
   { path: 'chinese/:id', component: Food4Component },
   { path: 'services', component: ServicesDisplayComponent },
   { path: 'rooms/:id', component: BookRoomComponent },
   { path: 'tables/:id', component: BookTableComponent },



]; 