import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewRegionPage } from './new-region.page';

describe('NewRegionPage', () => {
  let component: NewRegionPage;
  let fixture: ComponentFixture<NewRegionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewRegionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
