import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CucuHeaderComponent } from './cucu-header.component';

describe('CucuHeaderComponent', () => {
  let component: CucuHeaderComponent;
  let fixture: ComponentFixture<CucuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CucuHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CucuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
