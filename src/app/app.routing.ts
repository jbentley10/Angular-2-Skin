import { RouterModule, Routes } from "@angular/router";
import { LanderComponent } from './d/lander/lander.component';
// import { ShippingComponent } from './m/shipping/shipping.component';
import { CheckoutComponent } from './d/checkout/checkout.component';
import { ThankyouComponent } from './d/thankyou/thankyou.component';

const APP_ROUTES: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'lander', component: LanderComponent },
  // { path: 'shipping', component: ShippingComponent },
  { path: '', component: LanderComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
