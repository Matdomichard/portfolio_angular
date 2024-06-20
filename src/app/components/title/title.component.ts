import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
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
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'HTML & CSS', icon: 'fab fa-html5' },
    { name: 'React Native', icon: 'fab fa-react' },
    { name: 'GitLab CI/CD', icon: 'fab fa-gitlab' },
  ];

  ngAfterViewInit() {
    this.logos.forEach((logo: ElementRef) => {
      const letters = logo.nativeElement.querySelectorAll('.letter');
      letters.forEach((letter: HTMLElement, index: number) => {
        const waveHeight = 15;
        const offset = (index % 2 === 0 ? -1 : 1) * waveHeight;
        letter.style.display = 'inline-block';
        letter.style.transform = `translateY(${offset}px)`;
      });
    });
  }
}
