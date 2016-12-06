import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../global.directive';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  //providers: [GlobalDirective]
})
export class FooterComponent implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
