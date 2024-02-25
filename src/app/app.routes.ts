import { Routes } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'Order', component: OrderComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  {path:'blog',component:BlogComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];
export default routes;
