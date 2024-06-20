import { Component, AfterViewInit, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.adjustSvgSize();
    // Animation du fond
    const svg: SVGSVGElement | null = document.querySelector('.background svg');
    if (svg) {
      gsap.to(svg, {
        y: '+=20', // Ajustez la valeur pour la hauteur de la vague
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustSvgSize();
  }

  adjustSvgSize() {
    const svg = document.getElementById('background-svg');
    if (svg) {
      svg.setAttribute('width', `${window.innerWidth}`);
      svg.setAttribute('height', `${window.innerHeight}`);
    }
  }
}
