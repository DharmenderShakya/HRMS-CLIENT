import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortListedCandidateComponent } from './short-listed-candidate.component';

describe('ShortListedCandidateComponent', () => {
  let component: ShortListedCandidateComponent;
  let fixture: ComponentFixture<ShortListedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortListedCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortListedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
