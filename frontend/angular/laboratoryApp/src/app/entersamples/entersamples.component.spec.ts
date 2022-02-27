import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntersamplesComponent } from './entersamples.component';

describe('EntersamplesComponent', () => {
  let component: EntersamplesComponent;
  let fixture: ComponentFixture<EntersamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntersamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntersamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
