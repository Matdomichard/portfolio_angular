import { Component, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Projet {
  titre: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  lienSite?: string;
  lienDemo?: string;
  // soit un lien unique (legacy), soit deux liens front/back
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
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698760398/Portfolio/frequencies.png',
      description: `Application de tombola numérique pour l'association Frequencies. Permet la gestion des participants, l'attribution des numéros et le tirage au sort en direct. Interface administrateur pour la gestion des lots et des participants.`,
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      // on sépare front et back
      lienCodeFront: 'https://github.com/Matdomichard/frequencies-tombola-ui',
      lienCodeBack:  'https://github.com/Matdomichard/frequencies-tombola-api'
    },
    {
      titre: 'Codeur Nomade',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698760398/Portfolio/codeurnomade.png',
      description: `Le site codeurNomade est un outil gratuit aidant développeurs débutants ou reconvertis à trouver des opportunités en région selon langages informatiques demandés. Intégrant l'API Pôle Emploi, ce site favorise une répartition équilibrée des compétences en France.`,
      technologies: ['Vue.js', 'Axios', 'API France Travail'],
      lienSite: 'https://codeurnomade.vercel.app/',
      lienCode:  'https://github.com/Matdomichard/codeurnomade'
    },
    {
      titre: 'Sleep Tracker',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698760594/Portfolio/zzztracker.jpg',
      description: `SleepTracker est une application web complète permettant aux utilisateurs de suivre facilement les jours restants avant un événement important ou un objectif personnel. Grâce à une interface intuitive, vous pouvez créer votre compte, enregistrer vos dates clés et visualiser en un coup d'œil le temps restant en jours, semaines, mois, années ou encore en nombre de nuits de sommeil.`,
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      lienCodeFront: 'https://github.com/Matdomichard/zzztracker-frontend',
      lienCodeBack:  'https://github.com/Matdomichard/CompteArebours',
      lienSite: 'https://zzztracker.vercel.app/'
    },
    {
      titre: 'Combating Childhood Obesity (CCO)',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698762096/Portfolio/cco.png',
      description: `V2 de l'application Combating Childhood Obesity réalisée au sein du Degetel Lab. Application européenne destinée à réduire l'obésité infantile.`,
      technologies: ['React Native'],
      lienDemo: 'https://www.loom.com/share/01ee4ed517674241a1ab35d3f2b086a7'
    }
  ];

  constructor(private elementRef: ElementRef) {
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
