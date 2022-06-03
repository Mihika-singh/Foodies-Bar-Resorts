import { BookServiceComponent } from './book-service/book-service.component';
import { FeedbackDisplayComponent } from './feedback-display/feedback-display.component';
// import { FeedbackDisplayComponent } from './feedback-display/feedback-display.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FoodDisplayComponent } from './food-display/food-display.component';
import { FoodsDetailComponent } from './foods-detail/foods-detail.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServicesDisplayComponent } from './services-display/services-display.component';

export const routingTable = [
   // { path: '', component: LoginComponent },
   { path: '', component: HomeComponent },
   {path:"",redirectTo:'',pathMatch:'full'},
   // { path: 'mainHome', component: MainHomeComponent },
   { path: 'login', component:  LoginComponent },
   { path: 'help', component:  HelpComponent },
   { path: 'foods', component: FoodDisplayComponent },
   { path: 'north/:id', component: FoodsDetailComponent },
   { path: 'south/:id', component: FoodsDetailComponent },
   { path: 'pizza/:id', component: FoodsDetailComponent },
   { path: 'chinese/:id', component: FoodsDetailComponent },
   { path: 'services', component: ServicesDisplayComponent },


   { path: 'rooms/:id', component: BookServiceComponent },
   { path: 'tables/:id', component: BookServiceComponent },
   { path: 'books/:id', component: ServiceDetailsComponent },
   //{ path: 'feedback', component: FeedbackDisplayComponent   },
   { path: 'feedback', component: FeedbackFormComponent },
   { path: 'payments', component:  PaymentComponent },
]; 