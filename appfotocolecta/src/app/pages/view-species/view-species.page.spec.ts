import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSpeciesPage } from './view-species.page';

describe('ViewSpeciesPage', () => {
  let component: ViewSpeciesPage;
  let fixture: ComponentFixture<ViewSpeciesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewSpeciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
