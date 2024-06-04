import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'benji';

  constructor(private swUpdate: SwUpdate) { }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(evt => {
        switch (evt.type) {
          case 'VERSION_DETECTED':
            console.log(`Downloading new app version: ${evt.version.hash}`);
            break;
          case 'VERSION_READY':
            console.log(`Current app version: ${evt.currentVersion.hash}`);
            console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
            if (confirm('New version available. Load new version?')) {
              window.location.reload();
            }
            break;
          case 'VERSION_INSTALLATION_FAILED':
            console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
            break;
        }
      });

      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (let registration of registrations) {
          console.log('Service Worker registered with scope:', registration.scope);
        }
      });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Controller changed');
      });
    }
  }
}
