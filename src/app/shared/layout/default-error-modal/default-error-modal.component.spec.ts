import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultErrorModalComponent } from './default-error-modal.component';

describe('DefaultErrorModalComponent', () => {
  let component: DefaultErrorModalComponent;
  let fixture: ComponentFixture<DefaultErrorModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultErrorModalComponent]
    });
    fixture = TestBed.createComponent(DefaultErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
