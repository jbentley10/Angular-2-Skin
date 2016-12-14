import { RouterModule, Routes } from "@angular/router";
import { LanderComponent } from './m/lander/lander.component';
import { CheckoutComponent } from './m/checkout/checkout.component';
import { ThankyouComponent } from './m/thankyou/thankyou.component';

const APP_ROUTES: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'lander', component: LanderComponent },
  { path: '', component: LanderComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
