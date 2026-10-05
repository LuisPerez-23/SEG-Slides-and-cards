import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarcoPage } from './barco.page';

describe('BarcoPage', () => {
  let component: BarcoPage;
  let fixture: ComponentFixture<BarcoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
