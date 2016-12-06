import { Component, OnInit } from '@angular/core';
import { MainInfoComponent } from './main-info/main-info.component';
import { MainFormComponent } from './main-form/main-form.component';
import { Cs1Component } from './cs-1/cs-1.component';
import { Cs2Component } from './cs-2/cs-2.component';
import { FooterComponent } from '../footer/footer.component';
import { GlobalDirective } from '../../global.directive';

@Component({
  selector: 'app-lander',
  templateUrl: './lander.component.html',
  styleUrls: ['./lander.component.scss']
})
export class LanderComponent implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
