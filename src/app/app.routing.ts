import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'Orders', component: OrderComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contacts', component: ContactComponent },
  { path: 'shop', component: ShopComponent }, // Make sure this route is defined
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);
