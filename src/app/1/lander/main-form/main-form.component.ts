import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
