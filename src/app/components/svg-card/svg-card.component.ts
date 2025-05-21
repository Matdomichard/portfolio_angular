import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-card',
  templateUrl: './svg-card.component.html',
  styleUrls: ['./svg-card.component.css'],
})
export class SvgCardComponent {
  @Input() title1: string = 'BACKEND';
  @Input() content1: string =
    'Experienced in Java, Spring Boot, Spring Data, Spring Security, and RESTful APIs within a Service-Oriented Architecture (SOA).';
  @Input() title2: string = 'FRONTEND';
  @Input() content2: string =
    'Proficient in Angular, Vue.js TypeScript, and responsive design.';
}
