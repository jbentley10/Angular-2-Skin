import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-cs-4',
  templateUrl: './cs-4.component.html',
  styleUrls: ['./cs-4.component.scss']
})
export class Cs4Component implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
