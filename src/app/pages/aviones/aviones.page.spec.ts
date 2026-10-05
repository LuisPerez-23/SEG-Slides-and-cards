import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvionesPage } from './aviones.page';

describe('AvionesPage', () => {
  let component: AvionesPage;
  let fixture: ComponentFixture<AvionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
