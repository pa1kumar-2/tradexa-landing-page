import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatsappSupportComponent } from './whatsapp-support/whatsapp-support.component';
import { TradexaHeaderComponent } from './tradexa-header/tradexa-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './whatsapp-support/faq/faq.component';
import { TradexaFooterComponent } from './tradexa-footer/tradexa-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    WhatsappSupportComponent,
    TradexaHeaderComponent,
    FaqComponent,
    TradexaFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
