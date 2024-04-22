import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardsComponent } from './three-cards.component';

describe('ThreeCardsComponent', () => {
  let component: ThreeCardsComponent;
  let fixture: ComponentFixture<ThreeCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeCardsComponent]
    });
    fixture = TestBed.createComponent(ThreeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
