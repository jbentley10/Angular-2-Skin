import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-cs-3',
  templateUrl: './cs-3.component.html',
  styleUrls: ['./cs-3.component.scss']
})
export class Cs3Component implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
