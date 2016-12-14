/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cs3Component } from './cs-3.component';

describe('Cs3Component', () => {
  let component: Cs3Component;
  let fixture: ComponentFixture<Cs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
