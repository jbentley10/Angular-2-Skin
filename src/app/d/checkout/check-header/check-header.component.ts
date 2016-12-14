import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-check-header',
  templateUrl: './check-header.component.html',
  styleUrls: ['./check-header.component.scss']
})
export class CheckHeaderComponent implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
