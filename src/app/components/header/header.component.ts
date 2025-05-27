import { Component, AfterViewInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  constructor(public translationService: TranslationService) {}

  ngAfterViewInit() {
    const menuBoxes = document.querySelectorAll('.menu_box');

    menuBoxes.forEach((box) => {
      box.addEventListener('click', () => {
        const element = box as HTMLElement;
        element.classList.add('rotate');
        setTimeout(() => {
          element.classList.remove('rotate');
        }, 1000);
      });
    });
  }

  toggleLanguage(): void {
    const currentLang = this.translationService.getCurrentLanguage();
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    this.translationService.setLanguage(newLang);
  }

  getFlagIcon(): string {
    const currentLang = this.translationService.getCurrentLanguage();
    return currentLang === 'fr' ? 'assets/images/uk-flag.png' : 'assets/images/fr-flag.png';
  }

  getFlagClass(): string {
    const currentLang = this.translationService.getCurrentLanguage();
    // Afficher le drapeau de la langue actuelle, pas celle vers laquelle on va basculer
    return currentLang === 'fr' ? 'fi fi-fr' : 'fi fi-gb';
  }

  // Ajouter cette méthode à la classe HeaderComponent
  getCurrentLanguage(): string {
    return this.translationService.getCurrentLanguage();
  }
}
