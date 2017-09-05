/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QHacemosComponent } from './q-hacemos.component';

describe('QHacemosComponent', () => {
  let component: QHacemosComponent;
  let fixture: ComponentFixture<QHacemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QHacemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QHacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
