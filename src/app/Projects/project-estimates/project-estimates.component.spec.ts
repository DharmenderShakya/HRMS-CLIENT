import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEstimatesComponent } from './project-estimates.component';

describe('ProjectEstimatesComponent', () => {
  let component: ProjectEstimatesComponent;
  let fixture: ComponentFixture<ProjectEstimatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEstimatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
