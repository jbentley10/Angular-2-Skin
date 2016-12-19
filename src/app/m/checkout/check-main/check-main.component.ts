import { Component } from '@angular/core';
import { CheckoutComponent } from '../checkout.component';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-check-main',
  templateUrl: './check-main.component.html',
  styleUrls: ['./check-main.component.scss']
})
export class CheckMainComponent {
  public randomGuests = Math.floor(Math.random() * (23 - 1 + 1)) + 1;

  constructor (public echos: GlobalDirective) {}

  public hideBilling = true;

  public toggleHiddenBilling() {
    this.hideBilling = !this.hideBilling;
  }
}
