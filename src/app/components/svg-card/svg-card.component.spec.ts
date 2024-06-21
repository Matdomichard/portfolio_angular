import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCardComponent } from './svg-card.component';

describe('SvgCardComponent', () => {
  let component: SvgCardComponent;
  let fixture: ComponentFixture<SvgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
