import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-cs-5',
  templateUrl: './cs-5.component.html',
  styleUrls: ['./cs-5.component.scss']
})
export class Cs5Component implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
