import { Component, Input, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-svg-card',
  templateUrl: './svg-card.component.html',
  styleUrls: ['./svg-card.component.css'],
})
export class SvgCardComponent implements OnInit {
  @Input() title1Key: string = 'card.backend.title';
  @Input() content1Key: string = 'card.backend.content';
  @Input() title2Key: string = 'card.frontend.title';
  @Input() content2Key: string = 'card.frontend.content';
  
  title1: string = '';
  content1: string = '';
  title2: string = '';
  content2: string = '';
  
  constructor(private translationService: TranslationService) {}
  
  ngOnInit() {
    this.updateTranslations();
    
    // S'abonner aux changements de langue
    this.translationService.currentLanguage$.subscribe(() => {
      this.updateTranslations();
    });
  }
  
  updateTranslations() {
    this.title1 = this.translationService.translate(this.title1Key);
    this.content1 = this.translationService.translate(this.content1Key);
    this.title2 = this.translationService.translate(this.title2Key);
    this.content2 = this.translationService.translate(this.content2Key);
  }
}
