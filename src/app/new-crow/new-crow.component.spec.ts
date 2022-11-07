import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCrowComponent } from './new-crow.component';

describe('NewCrowComponent', () => {
  let component: NewCrowComponent;
  let fixture: ComponentFixture<NewCrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
