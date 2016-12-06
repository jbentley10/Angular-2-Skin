import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LanderComponent } from './1/lander/lander.component';
import { CheckoutComponent } from './1/checkout/checkout.component';
import { ThankyouComponent } from './1/thankyou/thankyou.component';
import { FooterComponent } from './1/footer/footer.component';
import { MainInfoComponent } from './1/lander/main-info/main-info.component';
import { MainFormComponent } from './1/lander/main-form/main-form.component';
import { Cs1Component } from './1/lander/cs-1/cs-1.component';
import { Cs2Component } from './1/lander/cs-2/cs-2.component';
import { CheckFormComponent } from './1/checkout/check-form/check-form.component';
import { CheckMainComponent } from './1/checkout/check-main/check-main.component';
import { ThankMainComponent } from './1/thankyou/thank-main/thank-main.component';

import { routing } from './app.routing';

import { CheckHeaderComponent } from './1/checkout/check-header/check-header.component';
import { GlobalDirective } from './global.directive';
import { TermsComponent } from './1/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    LanderComponent,
    CheckoutComponent,
    ThankyouComponent,
    FooterComponent,
    MainInfoComponent,
    MainFormComponent,
    Cs1Component,
    Cs2Component,
    CheckFormComponent,
    CheckMainComponent,
    ThankMainComponent,
    CheckHeaderComponent,
    GlobalDirective,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
