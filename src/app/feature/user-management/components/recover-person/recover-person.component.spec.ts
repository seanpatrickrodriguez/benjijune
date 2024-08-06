import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPersonComponent } from './recover-person.component';

describe('RecoverPersonComponent', () => {
  let component: RecoverPersonComponent;
  let fixture: ComponentFixture<RecoverPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoverPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
