import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMainPageComponent } from './body-main-page.component';

describe('BodyMainPageComponent', () => {
  let component: BodyMainPageComponent;
  let fixture: ComponentFixture<BodyMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
