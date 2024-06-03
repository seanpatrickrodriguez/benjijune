import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockSwUpdate {
  available = of(false);
  activateUpdate() {
    return Promise.resolve(true);
  }
}
