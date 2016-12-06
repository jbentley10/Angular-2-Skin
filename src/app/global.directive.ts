import { Directive } from '@angular/core';
import { Injectable } from '@angular/core';

@Directive({
  selector: '[appGlobal]'
})

@Injectable()
export class GlobalDirective {


  //FooterComponent
  productName = 'Muscle Enhance';
  url = 'trycjskincream.com';
  corpName = 'CJ Wellness, LLC.';
  corpAddress = '817 Riddlewood Ln., Highlands Ranch, CO 80129';
  returnAddress = '7308 S Alton Way Suite 2-A, Centennial,CO 80112';
  phone = '(888) 312-9976';
  email = 'care@trycjskincream.com';

  //Cs-1 Bullet points
  sectionOneBulletOne = '100% potent L-Arginine enhancement';
  sectionOneBulletTwo = 'May increase blood flow and improve muscular tone';
  sectionOneBulletThree = 'May help achieve ideal physique';

}
