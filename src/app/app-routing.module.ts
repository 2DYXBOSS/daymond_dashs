import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './views/Distribution/payment/payment.component';
import { SettingsComponent } from './views/Distribution/settings/settings.component';
import { MessageComponent } from './views/Distribution/message/message.component';
import { ProductsComponent } from './views/Distribution/products/products.component';
import { BadgeorderComponent } from './views/Recruiters/badgeorder/badgeorder.component';
import { PaiementsComponent } from './views/Recruiters/paiements/paiements.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/Distribution/order/order.module').then(m => m.OrderModule),

  },
  {
    path: 'orders',
    loadChildren: () => import('./views/Distribution/order/order.module').then(m => m.OrderModule),

  },
  {
    path: 'users',
    loadChildren: () => import('./views/Distribution/users/users.module').then(m => m.UsersModule),

  },
  {
    path: 'annonces',
    loadChildren: () => import('./views/Distribution/announcements/announcements.module').then(m => m.AnnouncementsModule),

  },
  {
    path: 'recruteur',
    loadChildren: () => import('./views/Recruiters/list-recruiters/list-recruiters.module').then(m => m.ListRecruitersModule),

  },
  {
    path: 'announce-recruteur',
    loadChildren: () => import('./views/Recruiters/annoncements-recruiter/annoncements-recruiter.module').then(m => m.AnnoncementsRecruiterModule),

  },
  {
    path: 'reglage',
    component: SettingsComponent
  },
  {
    path: 'commande-badge',
    component: BadgeorderComponent
  },
  {
    path: 'produits',
    component: ProductsComponent
  },
  {
    path: 'paiemennt',
    component: PaymentComponent
  },
  {
    path: 'paiemennt-recruteur',
    component: PaiementsComponent
  },
 
  {
    path: 'message',
    component:  MessageComponent
  },
  {
    path: 'setting',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
