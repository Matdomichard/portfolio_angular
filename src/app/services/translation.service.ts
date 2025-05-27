import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<string>('fr');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: { [key: string]: { [key: string]: string } } = {
    fr: {
      // Header
      'header.intro': 'INTRO',
      'header.projects': 'PROJECTS',
      'header.contact': 'CONTACT',
      
      // Title/Loader
      'loader.developer': 'DÉVELOPPEUR',
      'loader.fullstack': 'FULL STACK',
      'title.portfolio': 'PORTFOLIO',
      
      // Bio
      'bio.title': 'Merci de visiter mon portfolio',
      'bio.description': 'Salut, je suis Mathieu, un développeur full stack. Mon expérience professionnelle est principalement en développement backend, mais j\'adore l\'équilibre entre le travail backend et frontend. Ce portfolio, construit avec Angular, présente mes compétences frontend issues de projets personnels. J\'aime recréer des designs et donner vie aux idées. Profitez de l\'exploration de mon travail !',
      
      // Projects
      'projects.title': 'Mes Projets',
      'projects.visitSite': 'Visiter le site',
      'projects.viewFrontCode': 'Voir le code front',
      'projects.viewBackCode': 'Voir le code back',
      'projects.viewCode': 'Voir le code',
      'projects.viewDemo': 'Voir la Démo',

      
      // Contact
      'contact.title': 'Contact',
      'contact.name': 'Nom',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Envoyer',
      
      // Cards
      'card.backend.title': 'BACKEND',
      'card.backend.content': 'Expérimenté en Java, Spring Boot, Spring Data, Spring Security et APIs RESTful dans une architecture orientée services (SOA).',
      'card.frontend.title': 'FRONTEND',
      'card.frontend.content': 'Compétent en Angular, Vue.js, TypeScript et conception responsive.',

      
    // Projects Descriptions
    'projects.frequencies.description': "Application de tombola numérique pour l'association Frequencies. Permet la gestion des participants, l'attribution des numéros et le tirage au sort en direct. Interface administrateur pour la gestion des lots et des participants.",
    'projects.codeurNomade.description': "Le site Codeur Nomade est un outil gratuit aidant développeurs débutants ou reconvertis à trouver des opportunités en région selon les langages informatiques demandés. Intégrant l'API Pôle Emploi, ce site favorise une répartition équilibrée des compétences en France.",
    'projects.sleepTracker.description': "SleepTracker est une application web complète permettant de suivre facilement les jours restants avant un événement important ou un objectif personnel. Créez un compte, enregistrez vos dates clés et visualisez en un coup d'œil le temps restant en jours, semaines, mois, années ou nuits de sommeil.",
    'projects.cco.description': "V2 de l'application Combating Childhood Obesity réalisée au sein du Degetel Lab. Application européenne destinée à réduire l'obésité infantile.",
    },
    en: {
      // Header
      'header.intro': 'INTRO',
      'header.projects': 'PROJECTS',
      'header.contact': 'CONTACT',
      
      // Title/Loader
      'loader.developer': 'DEVELOPER',
      'loader.fullstack': 'FULL STACK',
      'title.portfolio': 'PORTFOLIO',
      
      // Bio
      'bio.title': 'Thank you for visiting my portfolio',
      'bio.description': 'Hi, I\'m Mathieu, a full stack developer. My professional experience is primarily in backend development, but I love the balance between backend and frontend work. This portfolio, built with Angular, showcases my frontend skills from personal projects. I enjoy recreating designs and bringing ideas to life. Enjoy exploring my work!',
      
      // Projects
      'projects.title': 'My Projects',
      'projects.visitSite': 'Visit Site',
      'projects.viewFrontCode': 'View Front Code',
      'projects.viewBackCode': 'View Back Code',
      'projects.viewCode': 'View Code',
      'projects.viewDemo': 'View Demo',
      
      // Contact
      'contact.title': 'Contact',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send',
      
      // Cards
      'card.backend.title': 'BACKEND',
      'card.backend.content': 'Experienced in Java, Spring Boot, Spring Data, Spring Security, and RESTful APIs within a Service-Oriented Architecture (SOA).',
      'card.frontend.title': 'FRONTEND',
      'card.frontend.content': 'Proficient in Angular, Vue.js TypeScript, and responsive design.',

      
    // Projects Descriptions
    'projects.frequencies.description': "Digital raffle app for the Frequencies association. Manages participants, assigns numbers, and runs live draws. Admin interface for managing prizes and participants.",
    'projects.codeurNomade.description': "Codeur Nomade is a free tool helping beginner or self-taught developers find opportunities across French regions based on in-demand programming languages. Integrated with the Pôle Emploi API, it promotes a more balanced distribution of tech skills across the country.",
    'projects.sleepTracker.description': "SleepTracker is a full-featured web app to easily track days left before a major event or personal goal. Create an account, save your key dates, and visualize the remaining time at a glance in days, weeks, months, years, or number of nights of sleep.",
    'projects.cco.description': "Second version of the Combating Childhood Obesity app, developed within the Degetel Lab. A European app aimed at reducing childhood obesity.",
  
    }
  };

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: string): void {
    this.currentLanguageSubject.next(language);
    localStorage.setItem('language', language);
  }

  translate(key: string): string {
    const currentLang = this.getCurrentLanguage();
    return this.translations[currentLang][key] || key;
  }

  constructor() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.currentLanguageSubject.next(savedLanguage);
    }
  }
}