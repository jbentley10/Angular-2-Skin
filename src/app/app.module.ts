import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Landing Page
import { LanderComponent } from './d/lander/lander.component';
import { MainInfoComponent } from './d/lander/main-info/main-info.component';
import { MainFormComponent } from './d/lander/main-form/main-form.component';
import { Cs1Component } from './d/lander/cs-1/cs-1.component';
import { Cs2Component } from './d/lander/cs-2/cs-2.component';
import { Cs3Component } from './d/lander/cs-3/cs-3.component';
import { Cs4Component } from './d/lander/cs-4/cs-4.component';
import { Cs5Component } from './d/lander/cs-5/cs-5.component';
import { Cs6Component } from './d/lander/cs-6/cs-6.component';

// Checkout Page
import { CheckoutComponent } from './d/checkout/checkout.component';
import { CheckHeaderComponent } from './d/checkout/check-header/check-header.component';
import { CheckFormComponent } from './d/checkout/check-form/check-form.component';
import { CheckMainComponent } from './d/checkout/check-main/check-main.component';

// Thank You Page
import { ThankMainComponent } from './d/thankyou/thank-main/thank-main.component';
import { ThankyouComponent } from './d/thankyou/thankyou.component';

// Terms, Privacy, Contact, and Ingredients Pages
import { TermsComponent } from './d/footer/modal/terms/terms.component';
import { PrivacyComponent } from './d/footer/modal/privacy/privacy.component';
import { ContactComponent } from './d/footer/modal/contact/contact.component';
import { IngredientsComponent } from './d/footer/modal/ingredients/ingredients.component';

// Footer
import { FooterComponent } from './d/footer/footer.component';

// Modal
import { ModalComponent } from './d/footer/modal/modal.component';

// Navigation-Routing
import { routing } from './app.routing';

// Global Variables
import { GlobalDirective } from './global.directive';
import { CheckFooterComponent } from './d/checkout/check-footer/check-footer.component';



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
    TermsComponent,
    ModalComponent,
    PrivacyComponent,
    ContactComponent,
    IngredientsComponent,
    Cs3Component,
    Cs4Component,
    Cs5Component,
    Cs6Component,
    CheckFooterComponent
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
