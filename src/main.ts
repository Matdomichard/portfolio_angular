import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js/dist/zone';

function enforceMinWidth() {
  if (window.innerWidth < 500) {
    document.documentElement.style.minWidth = '450px';
    document.body.style.minWidth = '450px';
  } else {
    document.documentElement.style.minWidth = 'auto';
    document.body.style.minWidth = 'auto';
  }
}

window.addEventListener('resize', enforceMinWidth);
window.addEventListener('load', enforceMinWidth);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
