import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit() {
    const menuBoxes = document.querySelectorAll('.menu_box');
    const floatingRegister = document.getElementById('floating_header');

    if (floatingRegister) {
      menuBoxes.forEach((box) => {
        box.addEventListener('click', () => {
          box.classList.add('rotate');
          floatingRegister.style.transform = 'rotate(360deg) scale(1.19128)';
        });
      });
    }
  }
}
