import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCreateComponent } from './review-create.component';

describe('ReviewCreateComponent', () => {
  let component: ReviewCreateComponent;
  let fixture: ComponentFixture<ReviewCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewCreateComponent]
    });
    fixture = TestBed.createComponent(ReviewCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
