import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayAttentanceComponent } from './today-attentance.component';

describe('TodayAttentanceComponent', () => {
  let component: TodayAttentanceComponent;
  let fixture: ComponentFixture<TodayAttentanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayAttentanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayAttentanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
