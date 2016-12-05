import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-1',
  templateUrl: './cs-1.component.html',
  styleUrls: ['./cs-1.component.scss']
})
export class Cs1Component implements OnInit {
  sectionOneBulletOne = '100% potent L-Arginine enhancement';
  sectionOneBulletTwo = 'May increase blood flow and improve muscular tone';
  sectionOneBulletThree = 'May help achieve ideal physique';

  constructor() { }

  ngOnInit() {
  }

}
