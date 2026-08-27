import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/i18n/language.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  langService = inject(LanguageService)
}
