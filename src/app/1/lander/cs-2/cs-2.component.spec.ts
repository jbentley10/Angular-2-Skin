/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cs2Component } from './cs-2.component';

describe('Cs2Component', () => {
  let component: Cs2Component;
  let fixture: ComponentFixture<Cs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
