/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThankMainComponent } from './thank-main.component';

describe('ThankMainComponent', () => {
  let comp:      ThankMainComponent;
  let fixture:   ComponentFixture<ThankMainComponent>;
  let de:        DebugElement;
  let el:        HTMLElement;
  let debugH1:   DebugElement;
  let elementH1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankMainComponent ], // declare the test component
    })
    .compileComponents();  // compile template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankMainComponent);
    comp = fixture.componentInstance; // ThankMainComponent test instance

    //fixture.detectChanges();

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('em'));
    el = de.nativeElement;

    debugH1 = fixture.debugElement.query(By.css('h1'));
    elementH1 = debugH1.nativeElement;
  });

  // TESTS TO RUN
  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should display the original header', () => {
    fixture.detectChanges();
    expect(elementH1.textContent).toContain(comp.anotherTest);
  });

  it('should display original message', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.testMessage);
  });

  it('should display this message', () => {
    comp.testMessage = 'Im dancin like a monkey!';
    fixture.detectChanges();
    expect(el.textContent).toContain('Im dancin like a monkey!');
  });

  it('should have a header that displays the monkey message', () => {
    fixture.detectChanges();
    expect(elementH1.textContent).toContain('What is up');
  })
});
