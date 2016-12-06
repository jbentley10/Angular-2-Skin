import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
