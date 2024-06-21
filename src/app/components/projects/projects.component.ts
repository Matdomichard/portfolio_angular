import {
  Component,
  AfterViewInit,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('circle') circle!: ElementRef;
  @ViewChild('content') content!: ElementRef;

  ngAfterViewInit() {
    this.adjustCircleSize();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.adjustCircleSize();
  }

  adjustCircleSize() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const circleElement = this.circle.nativeElement as HTMLElement;
    const circleTop = circleElement.getBoundingClientRect().top + scrollTop;

    // Commence l'animation seulement quand le cercle est visible
    if (scrollTop + windowHeight > circleTop) {
      const startScroll = circleTop - windowHeight / 2;
      const maxScrollTop = startScroll + windowHeight;
      const scrollPercent =
        (scrollTop - startScroll) / (maxScrollTop - startScroll);

      const newSize = 600 + windowHeight * scrollPercent * 2; // Augmenter la taille
      circleElement.style.width = `${newSize}px`;
      circleElement.style.height = `${newSize}px`;
    }
  }
}
