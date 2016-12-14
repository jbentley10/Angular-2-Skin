import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { TermsComponent } from './modal/terms/terms.component';
import { ContactComponent } from './modal/contact/contact.component';
import { PrivacyComponent } from './modal/privacy/privacy.component';

@Component({
  selector: 'app-check-footer',
  templateUrl: './check-footer.component.html',
  styleUrls: ['./check-footer.component.scss']
})
export class CheckFooterComponent implements OnInit {

  constructor() { }

  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;

  ngOnInit() {
  }

}
