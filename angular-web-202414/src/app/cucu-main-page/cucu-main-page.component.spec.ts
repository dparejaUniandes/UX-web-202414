import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CucuMainPageComponent } from './cucu-main-page.component';

describe('CucuMainPageComponent', () => {
  let component: CucuMainPageComponent;
  let fixture: ComponentFixture<CucuMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CucuMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CucuMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
