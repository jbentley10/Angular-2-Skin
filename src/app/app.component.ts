import { Component } from '@angular/core';
import { LanderComponent } from './1/lander/lander.component';
import { FooterComponent } from './1/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This should be green!';
  subTitle = 'This should be red';
}
