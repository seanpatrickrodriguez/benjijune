/// <reference types="jasmine" />

import { TestBed } from '@angular/core/testing';
import { RouterModule, provideRouter, withRouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { SwUpdate } from '@angular/service-worker';
import { MockSwUpdate } from 'src/testing/mocks/mock-sw-update';  // Adjust the path as necessary

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule.forRoot([], { useHash: true })],
    declarations: [AppComponent],
    providers: [
      { provide: SwUpdate, useClass: MockSwUpdate },
      provideRouter([{ path: '', component: AppComponent }])
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'benji'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('benji');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('benji app is running!');
  });
});
