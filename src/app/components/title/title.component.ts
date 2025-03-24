import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Renderer2,
  HostListener,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements AfterViewInit {
  @ViewChildren('logo') logos!: QueryList<ElementRef>;

  skills = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring', icon: 'fas fa-leaf' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Vue', icon: 'fab fa-vuejs' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'HTML & CSS', icon: 'fab fa-html5' },
    { name: 'React Native', icon: 'fab fa-react' },
    { name: 'GitLab CI/CD', icon: 'fab fa-gitlab' },
  ];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.applyWaveStyle();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.applyWaveStyle();
  }

  applyWaveStyle() {
    if (window.innerWidth > 768) {
      this.logos.forEach((logo: ElementRef) => {
        const letters = logo.nativeElement.querySelectorAll('.letter');
        letters.forEach((letter: HTMLElement, index: number) => {
          const waveHeight = 15;
          const offset = (index % 2 === 0 ? -1 : 1) * waveHeight;
          this.renderer.setStyle(letter, 'display', 'inline-block');
          this.renderer.setStyle(
            letter,
            'transform',
            `translateY(${offset}px)`
          );
        });
      });
    } else {
      this.logos.forEach((logo: ElementRef) => {
        const letters = logo.nativeElement.querySelectorAll('.letter');
        letters.forEach((letter: HTMLElement) => {
          this.renderer.setStyle(letter, 'transform', 'translateY(0)');
        });
      });
    }
  }
}
