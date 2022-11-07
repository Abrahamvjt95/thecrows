import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllParchmentComponent } from './all-parchment.component';

describe('AllParchmentComponent', () => {
  let component: AllParchmentComponent;
  let fixture: ComponentFixture<AllParchmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllParchmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllParchmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
