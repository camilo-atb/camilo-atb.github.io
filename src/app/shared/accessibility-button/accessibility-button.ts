import { Component, signal, HostListener, ElementRef, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { ThemeService, ThemeColor } from '../../core/services/theme.service';
import { Lang } from '../../core/i18n/lang.type';

@Component({
  selector: 'app-accessibility-button',
  imports: [],
  templateUrl: './accessibility-button.html',
  styleUrl: './accessibility-button.css',
})
export class AccessibilityButton {
  isOpen = signal(false);

  elementRef = inject(ElementRef);
  languageService = inject(LanguageService);
  themeService = inject(ThemeService);

  openCloseButton() {
    this.isOpen.set(!this.isOpen());
  }

  changeLanguage() {
    const current = this.languageService.lang();
    const nextLang: Lang = current === 'en' ? 'es' : 'en';
    this.languageService.setLanguage(nextLang);
  }

  setColor(color: ThemeColor) {
    this.themeService.setColor(color);
  }

  toggleMode() {
    this.themeService.toggleMode();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isOpen.set(false);
    }
  }
}
