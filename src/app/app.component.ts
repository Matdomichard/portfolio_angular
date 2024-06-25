import { Component, AfterViewInit, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Sélectionner et animer les SVG avec les classes .background-svg et .saturated-svg

    const greenlayer = document.querySelectorAll('.green-layer');
    greenlayer.forEach((svg) => {
      gsap.to(svg, {
        y: '+=20', // Ajuster la valeur pour la hauteur de la vague
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    const bluelayer = document.querySelectorAll('.blue-layer');
    bluelayer.forEach((svg) => {
      gsap.to(svg, {
        y: '+=30', // Ajuster la valeur pour la hauteur de la vague
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    const saturatedsvf = document.querySelectorAll('.saturated-svg');
    saturatedsvf.forEach((svg) => {
      gsap.to(svg, {
        y: '+=5', // Ajuster la valeur pour la hauteur de la vague
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }
}
