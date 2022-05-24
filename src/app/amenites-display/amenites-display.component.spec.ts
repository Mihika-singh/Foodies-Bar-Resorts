import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitesDisplayComponent } from './amenites-display.component';

describe('AmenitesDisplayComponent', () => {
  let component: AmenitesDisplayComponent;
  let fixture: ComponentFixture<AmenitesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmenitesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenitesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
