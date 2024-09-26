import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CucuChangePasswordComponent } from './cucu-change-password.component';

describe('CucuChangePasswordComponent', () => {
  let component: CucuChangePasswordComponent;
  let fixture: ComponentFixture<CucuChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CucuChangePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CucuChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
