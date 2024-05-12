import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectGridComponent } from './contect-grid.component';

describe('ContectGridComponent', () => {
  let component: ContectGridComponent;
  let fixture: ComponentFixture<ContectGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContectGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
