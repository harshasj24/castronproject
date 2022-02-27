import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemoglobinComponent } from './hemoglobin.component';

describe('HemoglobinComponent', () => {
  let component: HemoglobinComponent;
  let fixture: ComponentFixture<HemoglobinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemoglobinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemoglobinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
