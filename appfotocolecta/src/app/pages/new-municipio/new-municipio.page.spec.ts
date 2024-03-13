import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewMunicipioPage } from './new-municipio.page';

describe('NewMunicipioPage', () => {
  let component: NewMunicipioPage;
  let fixture: ComponentFixture<NewMunicipioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewMunicipioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
