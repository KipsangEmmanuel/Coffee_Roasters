import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlanComponent } from './button-plan.component';

describe('ButtonPlanComponent', () => {
  let component: ButtonPlanComponent;
  let fixture: ComponentFixture<ButtonPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPlanComponent]
    });
    fixture = TestBed.createComponent(ButtonPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
