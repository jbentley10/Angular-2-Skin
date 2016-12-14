import { Directive, Injectable } from '@angular/core';


@Directive({
  selector: '[appGlobal]'
})

@Injectable()
export class GlobalDirective {


  name = "Derma Devine"; //same as corp name minus llc ect.  IE Blossom cream
  productName = "Derma Devine Serum Trial";
  upsell1Name = "Derma Devine Eye Trial";
  upsell2Name = "Derma Devine Vitamin C";
  upsell3Name = "!!UPSELL3NAME";
  logo = 'logo.png';
  product1 = 'product1.png';
  upsell1Btl = 'product2.png';
  upsell1Ship = 4.97;
  upsell2Btl = 'product3.png';
  upsell2Ship = 24.95;
  upsell3Btl = 'product1.png';
  upsell3Ship = 4.99;
  upsell_2_math = 24.95 * 2;

  /* TO FIXED roundit.toFixed(2); */

  //$orderbottle = '<img src="orderbottle.png">';
  //$girl = '<img src="girl.png">';
  //$benefitsgraphic = '<img src="benefitsgraphic.png">';
  //$header = '<img src="header.png">';
  //$button = '<img src="button.png">';

  /* TO FIXED price.toFixed(2); */ // Price is for checkout functionality  straight sales so it would be 0.00 if its a trial

  trialPrice = 89.95; // Trialprice is what is in terms
  /* TO FIXED checkPrice.toFixed(2); */ // Checkout price, 0 for trials duh...just to make math work on step 1

  shipping = 4.95; //shipping is the same in terms and checkout
  shipProtection_productPrice = 1.99;
  totalTrial = 14;
  minusShipTime = 14 - 4;
  //$discountprice = "$0.00";
  //$shipfee = "$0.00";
  site = "trydermadevine.com";
  phone = "1-888-447-6613";
  email = "support@trydermadevine.com";
  address = "Corp Address:  ";
  corpName = "VEP Nutra LLC"; // Full corp name
  returnaddress = "VEP Nutra LLC<br>7251 West Lake Mead Boulevard,<br>Suite 300, Las Vegas, Nevada, 89128";
  version = "v1";

}
