import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailinboxComponent } from './emailinbox.component';

describe('EmailinboxComponent', () => {
  let component: EmailinboxComponent;
  let fixture: ComponentFixture<EmailinboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailinboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
