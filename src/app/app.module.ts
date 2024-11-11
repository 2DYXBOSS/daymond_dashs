import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaymentComponent } from './views/payment/payment.component';
import { ProductsComponent } from './views/products/products.component';
import { AccountingComponent } from './views/accounting/accounting.component';
import { SettingsComponent } from './views/settings/settings.component';
import { MessageComponent } from './views/message/message.component';







@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ProductsComponent,
    AccountingComponent,
    SettingsComponent,
    MessageComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
