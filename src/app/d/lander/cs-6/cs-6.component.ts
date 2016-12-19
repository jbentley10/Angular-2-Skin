import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-cs-6',
  templateUrl: './cs-6.component.html',
  styleUrls: ['./cs-6.component.scss']
})
export class Cs6Component implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
