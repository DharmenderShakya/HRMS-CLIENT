import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReadMailComponent } from './email-read-mail.component';

describe('EmailReadMailComponent', () => {
  let component: EmailReadMailComponent;
  let fixture: ComponentFixture<EmailReadMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReadMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailReadMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
