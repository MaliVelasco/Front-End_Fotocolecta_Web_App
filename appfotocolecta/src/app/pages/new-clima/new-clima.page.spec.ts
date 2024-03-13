import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewClimaPage } from './new-clima.page';

describe('NewClimaPage', () => {
  let component: NewClimaPage;
  let fixture: ComponentFixture<NewClimaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewClimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
