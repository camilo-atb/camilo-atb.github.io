import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Lang } from '../i18n/lang.type';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private data: Project[] = [
    {
      id: 1,
      emoji: '🏗️',
      title: { en: 'Hex Architecture API', es: 'API Arquitectura Hexagonal' },
      description: {
        en: 'REST API built with Go following hexagonal architecture principles.',
        es: 'API REST construida con Go siguiendo principios de arquitectura hexagonal.'
      },
      tags: ['Go', 'Hexagonal', 'REST'],
      url: 'https://github.com'
    },
    {
      id: 2,
      emoji: '⚡',
      title: { en: 'Event-Driven Service', es: 'Servicio Event-Driven' },
      description: {
        en: 'Microservice with event-driven communication and clean separation of concerns.',
        es: 'Microservicio con comunicación basada en eventos y separación clara de responsabilidades.'
      },
      tags: ['Go', 'Events', 'Microservices'],
      url: 'https://github.com'
    },
    {
      id: 3,
      emoji: '🔄',
      title: { en: 'Full Flow CLI', es: 'CLI Flujo Completo' },
      description: {
        en: 'CLI tool implementing end-to-end flows with dependency injection.',
        es: 'Herramienta CLI implementando flujos de principio a fin con inyección de dependencias.'
      },
      tags: ['Go', 'CLI', 'DI'],
      url: 'https://github.com'
    },
  ];

  getAll() {
    return of(this.data);
  }

  getLabel(project: Project, lang: Lang, key: 'title' | 'description' = 'title') {
    return project[key][lang];
  }
}
