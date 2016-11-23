/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddTabComponent } from './add-tab.component';

describe('AddTabComponent', () => {
  let component: AddTabComponent;
  let fixture: ComponentFixture<AddTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
