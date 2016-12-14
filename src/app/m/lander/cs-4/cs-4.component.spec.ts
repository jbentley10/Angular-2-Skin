/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cs4Component } from './cs-4.component';

describe('Cs4Component', () => {
  let component: Cs4Component;
  let fixture: ComponentFixture<Cs4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
