import { Injectable, signal } from '@angular/core';
import type {Lang} from './lang.type';
import {TranslationNode, translations} from './translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private currentLang = signal<Lang>('en'); // Idioma actual

  lang = this.currentLang.asReadonly();

  setLanguage(lang: Lang) {
    this.currentLang.set(lang);
  }

  t(key: string): string { // pasamos la clave y devolvemos un string
    // El key que vamos a pasar es, por ejemplo: hero.title
    const lang = this.currentLang(); // Tomamos el idioma actual

    const result = key
      .split('.')
      .reduce<TranslationNode | undefined>(
        (obj, part) =>
          typeof obj === 'object' && obj !== null
            ? obj[part]
            : undefined,
        translations[lang]
      );

    return typeof result === 'string' ? result : key;
  }
}
