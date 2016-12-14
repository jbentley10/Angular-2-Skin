/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cs5Component } from './cs-5.component';

describe('Cs5Component', () => {
  let component: Cs5Component;
  let fixture: ComponentFixture<Cs5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
