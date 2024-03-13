import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewSpeciePage } from './new-specie.page';

describe('NewSpeciePage', () => {
  let component: NewSpeciePage;
  let fixture: ComponentFixture<NewSpeciePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewSpeciePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
