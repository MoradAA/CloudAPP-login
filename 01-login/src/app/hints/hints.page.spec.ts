import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintsPage } from './hints.page';

describe('HintsPage', () => {
  let component: HintsPage;
  let fixture: ComponentFixture<HintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
