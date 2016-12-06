import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { LanderComponent } from './1/lander/lander.component';
import { FooterComponent } from './1/footer/footer.component';
import { GlobalDirective } from './global.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent {
  Title = 'This should be green!';
  subTitle = 'This should be red';
  public constructor(private titleService: Title ) {}
}
