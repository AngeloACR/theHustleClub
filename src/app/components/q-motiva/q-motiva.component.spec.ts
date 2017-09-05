/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QMotivaComponent } from './q-motiva.component';

describe('QMotivaComponent', () => {
  let component: QMotivaComponent;
  let fixture: ComponentFixture<QMotivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QMotivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QMotivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
