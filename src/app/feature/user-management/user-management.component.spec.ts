// src/app/feature/user-management/user-management.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserManagementComponent } from './user-management.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserManagementComponent,
        LoginComponent
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,

      ],
      providers: [UserService,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth())
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
