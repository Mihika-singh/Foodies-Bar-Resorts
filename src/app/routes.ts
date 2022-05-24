

import { BookRoomComponent } from './book-room/book-room.component';
import { BookTableComponent } from './book-table/book-table.component';
 
import {  FoodViewComponent } from './food-view1/food-view.component';
import { Food2Component } from './food2/food2.component';
import { Food3Component } from './food3/food3.component';
import { Food4Component } from './food4/food4.component';
import { HomeComponent } from './home/home.component';
 
 



export const routingTable = [
     {path:'',component: HomeComponent},
     {path:'',redirectTo: '/',pathMatch:'full'},
     

  { path: 'foods1/:id', component:  FoodViewComponent  },
 { path: 'foods2/:id', component:Food2Component  },
 { path: 'foods3/:id', component:Food3Component  },
 { path: 'foods4/:id', component:Food4Component  },
 { path: 'services1/:id', component:  BookRoomComponent   },

 { path: 'services2/:id', component:  BookTableComponent},
  ]; 