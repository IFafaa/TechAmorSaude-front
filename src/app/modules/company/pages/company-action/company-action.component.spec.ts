import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyActionComponent } from './company-action.component';

describe('CompanyActionComponent', () => {
  let component: CompanyActionComponent;
  let fixture: ComponentFixture<CompanyActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyActionComponent]
    });
    fixture = TestBed.createComponent(CompanyActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
