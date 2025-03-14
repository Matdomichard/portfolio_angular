import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projets = [
    {
      titre: 'Codeur Nomade',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698760398/Portfolio/codeurnomade.png',
      description: `Le site codeurNomade est un outil gratuit aidant développeurs informatiques débutants ou reconvertis à trouver des opportunités en région selon langages informatiques demandés. Intégrant l'API Pôle Emploi, ce site favorise une répartition équilibrée des compétences en France.`,
      lienSite: 'https://codeurnomade.vercel.app/',
      lienCode: 'https://github.com/Matdomichard/codeurnomade'
    },
    {
      titre: 'EasyCoopte',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698760594/Portfolio/easycoopte.jpg',
      description: `EasyCoopte est une solution digitale permettant de mettre en place un programme de cooptation dans son entreprise.`,
      lienSite: '',
      lienCode: ''
    },
    {
      titre: 'Combating Childhood Obesity (CCO)',
      imageUrl: 'https://res.cloudinary.com/dyx38qkbh/image/upload/v1698762096/Portfolio/cco.png',
      description: `V2 de l'application Combating Childhood Obesity réalisée au sein du Degetel Lab. Application européenne destinée à réduire l'obésité infantile.`,
      lienDemo: 'https://www.loom.com/share/01ee4ed517674241a1ab35d3f2b086a7'
    }
  ];
}
