import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Project 1',
      description: 'Description of project 1',
      link: 'http://example.com/project1',
    },
    {
      name: 'Project 2',
      description: 'Description of project 2',
      link: 'http://example.com/project2',
    },
    // Ajoutez d'autres projets ici
  ];
}
