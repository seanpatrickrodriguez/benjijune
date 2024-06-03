import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class PerformanceMonitoringInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('firebase')) {
      const started = Date.now();
      return next.handle(req).pipe(
        tap(
          event => {
            // Log response details here if needed
          },
          error => {
            // Log error details here if needed
          },
          () => {
            const elapsed = Date.now() - started;
            console.log(`Firebase request for ${req.urlWithParams} took ${elapsed} ms.`);
          }
        )
      );
    }
    return next.handle(req);
  }
}
