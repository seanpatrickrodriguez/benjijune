// src/app/app-init.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  constructor() { }

  initializeApp(): void {
    document.cookie = "_ga=GA1.2.1234567890.1234567890; domain=.benji-5fd54.web.app; path=/; SameSite=None; Secure";
  }
}
