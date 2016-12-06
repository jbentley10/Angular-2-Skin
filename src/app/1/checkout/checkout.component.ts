import { Component, OnInit } from '@angular/core';
import { CheckHeaderComponent } from './check-header/check-header.component';
import { CheckMainComponent } from './check-main/check-main.component';
import { CheckFormComponent } from './check-form/check-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
