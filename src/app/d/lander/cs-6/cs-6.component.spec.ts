/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cs6Component } from './cs-6.component';

describe('Cs6Component', () => {
  let component: Cs6Component;
  let fixture: ComponentFixture<Cs6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
