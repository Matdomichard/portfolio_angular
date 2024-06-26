import { Component, AfterViewInit, HostListener, Input } from '@angular/core';
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
    const direction = this.group === 1 ? -1 : 1;
    gsap.to(`.blob-group-${this.group}`, {
      x: direction * scrollPos * 0.5, // Horizontal
      y: scrollPos, // Parallax effect
      ease: 'power1.out',
    });
  }

  animateBlobs() {
    const blobs = document.querySelectorAll(`.blob-group-${this.group} .blob`);
    blobs.forEach((blob) => {
      gsap.to(blob, {
        rotation: this.group === 1 ? 360 : -360, // Rotate in different directions
        duration: 40,
        repeat: -1,
        ease: 'linear',
      });
    });
  }

  getBlobGroupClass(): string {
    return `blob-group blob-group-${this.group}`;
  }
}
