import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { PerformanceMonitoringInterceptor } from './performance-monitoring.interceptor';

describe('PerformanceMonitoringInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: PerformanceMonitoringInterceptor, multi: true }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should log the request time for Firebase requests', () => {
    const testUrl = 'https://your-firebase-project.firebaseio.com/data.json';

    httpClient.get(testUrl).subscribe();

    const req = httpMock.expectOne(testUrl);
    req.flush({});

    // You can add spies to console.log to verify logging if needed
  });
});