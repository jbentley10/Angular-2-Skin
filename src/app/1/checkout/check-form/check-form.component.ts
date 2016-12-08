import { Component, OnInit } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
