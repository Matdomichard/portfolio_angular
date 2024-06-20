import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements AfterViewInit {
  @ViewChildren('logo') logos!: QueryList<ElementRef>;

  companies = [
    { name: 'Aquaring' },
    { name: 'Accenture' },
    { name: 'Adways' },
    { name: 'CyberAgent' },
    { name: 'Sansan' },
    { name: 'CTW' },
    { name: 'Safie' },
    { name: 'Persol' },
    { name: 'Bandai Namco' },
    { name: 'Visional' },
    { name: 'Money Forward' },
    { name: 'Mixi' },
    { name: 'Lifull' },
  ];

  ngAfterViewInit() {
    this.logos.forEach((logo: ElementRef) => {
      const letters = logo.nativeElement.querySelectorAll('.letter');
      console.log('letters:', letters);
      letters.forEach((letter: HTMLElement, index: number) => {
        const waveHeight = 15; // Hauteur de la vague
        const offset = (index % 2 === 0 ? -1 : 1) * waveHeight; // Alterne entre haut et bas
        letter.style.display = 'inline-block';
        letter.style.transform = `translateY(${offset}px)`;
      });
    });
  }

  // Animation du fond
  svg = document.querySelector('.background svg');
  if(svg: gsap.TweenTarget) {
    gsap.to(svg, {
      y: '+=20', // Ajustez la valeur pour la hauteur de la vague
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
}
