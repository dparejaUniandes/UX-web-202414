import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsInputComponent } from './fields-input.component';

describe('FieldsInputComponent', () => {
  let component: FieldsInputComponent;
  let fixture: ComponentFixture<FieldsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldsInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
