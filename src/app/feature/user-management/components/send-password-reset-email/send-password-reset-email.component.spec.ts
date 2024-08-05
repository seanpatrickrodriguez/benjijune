import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPasswordResetEmailComponent } from './send-password-reset-email.component';

describe('SendPasswordResetEmailComponent', () => {
  let component: SendPasswordResetEmailComponent;
  let fixture: ComponentFixture<SendPasswordResetEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendPasswordResetEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendPasswordResetEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
