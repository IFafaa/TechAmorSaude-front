import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListSpecialtyComponent } from './company-list-specialty.component';

describe('CompanyListSpecialtyComponent', () => {
  let component: CompanyListSpecialtyComponent;
  let fixture: ComponentFixture<CompanyListSpecialtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyListSpecialtyComponent]
    });
    fixture = TestBed.createComponent(CompanyListSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
