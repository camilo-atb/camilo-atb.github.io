import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Technology } from '../../models/technology.model';
import { Lang } from '../i18n/lang.type';

@Injectable({
  providedIn: 'root',
})
export class TechnologyService {

  private data: Technology[] = [
    { id: 1, icon: 'angular', translations: { en: 'Angular', es: 'Angular' } },
    { id: 2, icon: 'typescript', translations: { en: 'TypeScript', es: 'TypeScript' } },
    { id: 3, icon: 'go', translations: { en: 'Go', es: 'Go' } },
    { id: 4, icon: 'java', translations: { en: 'Java', es: 'Java' } },
    { id: 5, icon: 'spring-boot', translations: { en: 'Spring Boot', es: 'Spring Boot' } },
    { id: 6, icon: 'git', translations: { en: 'Git', es: 'Git' } },
    { id: 7, icon: 'sql', translations: { en: 'SQL', es: 'SQL' } },
    { id: 8, icon: 'html', translations: { en: 'HTML', es: 'HTML' } },
    { id: 9, icon: 'css', translations: { en: 'CSS', es: 'CSS' } },
    { id: 10, icon: 'javascript', translations: { en: 'JavaScript', es: 'JavaScript' } },
    { id: 11, icon: 'express', translations: { en: 'Express.js', es: 'Express.js' } },
  ];

  getAll() {
    return of(this.data);
  }

  getLabel(tech: Technology, lang: Lang) {
    return tech.translations[lang];
  }
}
