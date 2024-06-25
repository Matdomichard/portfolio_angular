import { Component, AfterViewInit, Input, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-blob-group',
  templateUrl: './blob-group.component.html',
  styleUrls: ['./blob-group.component.css'],
})
export class BlobGroupComponent implements AfterViewInit {
  @Input() group!: number;

  ngAfterViewInit() {
    this.animateBlobs();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPos = window.scrollY;
    gsap.to(`.blob-group-${this.group}`, {
      x: this.group === 1 ? -scrollPos * 0.2 : scrollPos * 0.2, // Déplacement à gauche ou à droite
      ease: 'power1.out',
    });
  }

  animateBlobs() {
    const blobs = document.querySelectorAll(`.blob-group-${this.group} .blob`);
    blobs.forEach((blob) => {
      gsap.to(blob, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
      });
    });
  }

  getBlobGroupClass(): string {
    return `blob-group blob-group-${this.group}`;
  }
}
