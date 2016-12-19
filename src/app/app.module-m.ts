import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Landing Page
import { LanderComponent } from './m/lander/lander.component';
import { MainInfoComponent } from './m/lander/main-info/main-info.component';
import { MainFormComponent } from './m/lander/main-form/main-form.component';
import { Cs1Component } from './m/lander/cs-1/cs-1.component';
import { Cs2Component } from './m/lander/cs-2/cs-2.component';
import { Cs3Component } from './m/lander/cs-3/cs-3.component';

// Checkout Page
import { CheckoutComponent } from './m/checkout/checkout.component';
import { CheckHeaderComponent } from './m/checkout/check-header/check-header.component';
import { CheckFormComponent } from './m/checkout/check-form/check-form.component';
import { CheckMainComponent } from './m/checkout/check-main/check-main.component';
import { CheckFooterComponent } from './m/checkout/check-footer/check-footer.component';

// Shipping Page (Mobile only)
import { ShippingComponent } from './m/shipping/shipping.component';

// Thank You Page
import { ThankMainComponent } from './m/thankyou/thank-main/thank-main.component';
import { ThankyouComponent } from './m/thankyou/thankyou.component';

// Terms, Privacy, Contact, and Ingredients Pages
import { TermsComponent } from './m/footer/modal/terms/terms.component';
import { PrivacyComponent } from './m/footer/modal/privacy/privacy.component';
import { ContactComponent } from './m/footer/modal/contact/contact.component';
import { IngredientsComponent } from './m/footer/modal/ingredients/ingredients.component';

// Footer
import { FooterComponent } from './m/footer/footer.component';

// Modal
import { ModalComponent } from './m/footer/modal/modal.component';

// Navigation-Routing
import { routing } from './app.routing';

// Global Variables
import { GlobalDirective } from './global.directive';



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
    Cs3Component,
    CheckFormComponent,
    CheckMainComponent,
    ThankMainComponent,
    CheckHeaderComponent,
    GlobalDirective,
    TermsComponent,
    ModalComponent,
    PrivacyComponent,
    ContactComponent,
    IngredientsComponent,
    CheckFooterComponent,
    ShippingComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [GlobalDirective, Title],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
