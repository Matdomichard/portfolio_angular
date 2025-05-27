import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Renderer2,
  HostListener,
  OnInit
} from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { TranslationService } from '../../services/translation.service';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, AfterViewInit {
  @ViewChildren('logo') logos!: QueryList<ElementRef>;
  @ViewChildren('loader') loader!: ElementRef;
  @ViewChildren('loaderText') loaderText!: ElementRef;
  @ViewChildren('mainContent') mainContent!: ElementRef;

  skills = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring Boot', icon: 'fas fa-leaf' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Vue.js', icon: 'fab fa-vuejs' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'HTML & CSS', icon: 'fab fa-html5' },
    { name: 'React Native', icon: 'fab fa-react' },
    { name: 'GitLab CI/CD', icon: 'fab fa-gitlab' },
  ];

  constructor(private renderer: Renderer2, private translationService: TranslationService) {}

  ngOnInit(): void {
    // Initialize component
  }

  ngAfterViewInit(): void {
    // Start the loader animation when the view is initialized
    this.applyWaveStyle();
    this.startLoaderAnimation();
  }

  startLoaderAnimation() {
    const steps = [
      this.translationService.translate('loader.developer'),
      this.translationService.translate('loader.fullstack')
    ];
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".loader", {
          x: "100%",
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => {
            const loader = document.querySelector('.loader');
            if (loader) {
              loader.remove();
              // Forcer le scroll en haut de la page
              window.scrollTo({
                top: 0,
                behavior: 'auto'
              });
            }
          }
        });
      }
    });

    steps.forEach((word) => {
      tl.add(gsap.timeline()
        .set(".loader-text", { text: word })
        .to(".loader-text", {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.in"
        })
        .to(".loader-text", { duration: 0.8 })
        .to(".loader-text", {
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.out"
        })
      );
    });
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
