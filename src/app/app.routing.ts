import { RouterModule, Routes } from "@angular/router";

import { LanderComponent } from './1/lander/lander.component';
import { CheckoutComponent } from './1/checkout/checkout.component';
import { ThankyouComponent } from './1/thankyou/thankyou.component';
import { TermsComponent } from './1/terms/terms.component';

const APP_ROUTES: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'lander', component: LanderComponent },
  { path: '', component: LanderComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
