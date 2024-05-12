import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttendanceSheetComponent } from './employee-attendance-sheet.component';

describe('EmployeeAttendanceSheetComponent', () => {
  let component: EmployeeAttendanceSheetComponent;
  let fixture: ComponentFixture<EmployeeAttendanceSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAttendanceSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAttendanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
