import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPhoneComponent } from './recover-phone.component';

describe('RecoverPhoneComponent', () => {
  let component: RecoverPhoneComponent;
  let fixture: ComponentFixture<RecoverPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoverPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
