import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit() {
    const menuBoxes = document.querySelectorAll('.menu_box');

    menuBoxes.forEach((box) => {
      box.addEventListener('click', () => {
        const element = box as HTMLElement;
        element.classList.add('rotate');
        setTimeout(() => {
          element.classList.remove('rotate');
        }, 1000); // Réinitialiser après l'animation
      });
    });
  }
}
