import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Certification } from '../../models/certifications.model';
import { Lang } from '../i18n/lang.type';

@Injectable({
  providedIn: 'root',
})
export class CertificationsService {

  private data: Certification[] = [
    {
      id: 1,
      name: 'Bootcamp Desarrollo de software basado en agentes con Kiro',
      entity: 'Código Facilito',
      logoEntity: 'codigo-facilito',
      date: 'jul. 2026',
      translations: {
        es: 'Bootcamp Desarrollo de software basado en agentes con Kiro',
        en: 'Agent-Based Software Development Bootcamp with Kiro'
      }
    },
    {
      id: 2,
      name: 'Curso Gratis de Lovable para Crear Páginas Web sin Programar',
      entity: 'Platzi',
      logoEntity: 'platzi',
      date: 'dic. 2025',
      translations: {
        es: 'Curso de Lovable para Crear Páginas Web sin Programar',
        en: 'Lovable Course for Creating Web Pages Without Coding'
      }
    },
    {
      id: 3,
      name: 'Formación SQL con MySQL',
      entity: 'Alura Latam',
      logoEntity: 'alura',
      date: 'nov. 2025',
      translations: {
        es: 'Formación SQL con MySQL',
        en: 'SQL Training with MySQL'
      }
    },
    {
      id: 4,
      name: 'Programa ONE Tech Foundation G8 - Back End',
      entity: 'Alura Latam',
      logoEntity: 'alura',
      date: 'jul. 2025',
      translations: {
        es: 'Programa ONE Tech Foundation G8 - Back End',
        en: 'ONE Tech Foundation G8 Program - Back End'
      }
    },
    {
      id: 5,
      name: 'Bootcamp de GitHub Foundations',
      entity: 'Código Facilito',
      logoEntity: 'codigo-facilito',
      date: 'jun. 2025',
      translations: {
        es: 'Bootcamp de GitHub Foundations',
        en: 'GitHub Foundations Bootcamp'
      }
    },
    {
      id: 6,
      name: 'Bootcamp Premium de Desarrollo Web Frontend',
      entity: 'Código Facilito',
      logoEntity: 'codigo-facilito',
      date: 'jun. 2025',
      translations: {
        es: 'Bootcamp Premium de Desarrollo Web Frontend',
        en: 'Premium Frontend Web Development Bootcamp'
      }
    },
    {
      id: 7,
      name: 'Data Analysis with Python',
      entity: 'IBM',
      logoEntity: 'ibm',
      date: 'may. 2025',
      translations: {
        es: 'Análisis de Datos con Python',
        en: 'Data Analysis with Python'
      }
    },
    {
      id: 8,
      name: 'Programación - Nivel Explorador',
      entity: 'MINTIC',
      logoEntity: 'mintic',
      date: 'dic. 2024',
      translations: {
        es: 'Programación - Nivel Explorador',
        en: 'Programming - Explorer Level'
      }
    },
  ];

  getAll() {
    return of(this.data);
  }

  getLabel(certification: Certification, lang: Lang) {
    return certification.translations[lang];
  }
}
