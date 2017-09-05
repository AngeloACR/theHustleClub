/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HClubComponent } from './h-club.component';

describe('HClubComponent', () => {
  let component: HClubComponent;
  let fixture: ComponentFixture<HClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
