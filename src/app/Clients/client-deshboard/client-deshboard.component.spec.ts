import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeshboardComponent } from './client-deshboard.component';

describe('ClientDeshboardComponent', () => {
  let component: ClientDeshboardComponent;
  let fixture: ComponentFixture<ClientDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
