import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-card',
  templateUrl: './svg-card.component.html',
  styleUrls: ['./svg-card.component.css'],
})
export class SvgCardComponent {
  @Input() title1: string = 'BACKEND';
  @Input() content1: string =
    'Experience in Spring Boot, Java, and microservices.';
  @Input() title2: string = 'FRONTEND';
  @Input() content2: string =
    'Proficient in Angular, TypeScript, and responsive design.';
}
