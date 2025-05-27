import { Component, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslationService } from '../../services/translation.service';

interface Projet {
  titre: string;
  imageUrl: string;
  descriptionKey: string; // Clé de traduction au lieu de description directe
  technologies: string[];
  lienSite?: string;
  lienDemo?: string;
  lienCode?: string;
  lienCodeFront?: string;
  lienCodeBack?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projets: Projet[] = [
    {
      titre: 'Frequencies Tombola',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/f_auto,q_auto/v1/Portfolio/frequencies',
      descriptionKey: 'projects.frequencies.description',
      technologies: ["Angular", "Java", 'PostgreSQL', 'Docker'],
      lienCodeFront: 'https://github.com/Matdomichard/frequencies-tombola-ui',
      lienCodeBack:  'https://github.com/Matdomichard/frequencies-tombola-api'
    },
    {
      titre: 'Codeur Nomade',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698760398/Portfolio/codeurnomade.png',
      descriptionKey: 'projects.codeurNomade.description',
      technologies: ['Vue.js', 'Axios', 'API France Travail'],
      lienSite: 'https://codeurnomade.vercel.app/',
      lienCode:  'https://github.com/Matdomichard/codeurnomade'
    },
    {
      titre: 'Sleep Tracker',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698760594/Portfolio/zzztracker.jpg',
      descriptionKey: 'projects.sleepTracker.description',
      technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
      lienCodeFront: 'https://github.com/Matdomichard/zzztracker-frontend',
      lienCodeBack:  'https://github.com/Matdomichard/CompteArebours',
      lienSite: 'https://zzztracker.vercel.app/'
    },
    {
      titre: 'Combating Childhood Obesity (CCO)',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698762096/Portfolio/cco.png',
      descriptionKey: 'projects.cco.description',
      technologies: ['React Native'],
      lienDemo: 'https://www.loom.com/share/01ee4ed517674241a1ab35d3f2b086a7'
    }
  ];

  constructor(
    private elementRef: ElementRef,
    private translationService: TranslationService
  ) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit() {
    setTimeout(() => this.initializeAnimations(), 100);
  }

  private initializeAnimations() {
    const cards = this.elementRef.nativeElement.querySelectorAll('.projet-card');
    cards.forEach((card: Element) => {
      gsap.fromTo(card,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            toggleActions: 'play none none reverse',
            scrub: 1
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out'
        }
      );
    });
  }
}
