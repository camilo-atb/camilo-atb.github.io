import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Milestone } from '../../models/milestones.model';
import { Lang } from '../i18n/lang.type';

@Injectable({
  providedIn: 'root',
})
export class MilestonesService {

  private data: Milestone[] = [
    {
      id: 1,
      date: { es: 'Septiembre, 2024', en: 'September, 2024' },
      role: { es: 'Ganador', en: 'Winner' },
      title: { es: 'Hackathon Talento Tech - Región 7', en: 'Talento Tech Hackathon - Region 7' },
      description: {
        es: 'Obtuvimos el primer puesto en la Hackathon Talento Tech - Región 7, categoría Explorador. Desarrollamos una solución enfocada en reciclaje, destacándonos por el análisis del problema, creatividad y enfoque en impacto.',
        en: 'We achieved first place at the Talento Tech Hackathon - Region 7 (Explorer category). Our team developed an innovative recycling-focused solution, recognized for strong problem analysis, creativity, and impact-driven design.'
      },
      status: 'confirmed'
    },
    {
      id: 2,
      date: { es: 'Abril, 2025', en: 'April, 2025' },
      role: { es: 'Monitor Académico', en: 'Academic Assistant' },
      title: { es: 'Monitor Académico', en: 'Academic Assistant Program' },
      description: {
        es: 'Brindé apoyo al instructor, realicé seguimiento académico a múltiples fichas, desarrollé automatizaciones para generación de reportes y acompañé estudiantes en sesiones de resolución de dudas.',
        en: 'Supported the instructor, tracked academic groups, developed report automation tools, and assisted students through mentoring and technical guidance sessions.'
      },
      status: 'confirmed'
    },
    {
      id: 3,
      date: { es: 'En validación', en: 'Under validation' },
      role: { es: 'Estudiante', en: 'Student' },
      title: { es: 'Reconocimiento a la excelencia académica', en: 'Academic Excellence Recognition' },
      description: {
        es: 'Reconocimiento recibido durante el Tecnólogo en Análisis y Desarrollo de Software por alto rendimiento académico y compromiso con el programa.',
        en: 'Recognition awarded during the Software Analysis and Development program for outstanding academic performance and commitment.'
      },
      status: 'pending'
    },
  ];

  getAll() {
    return of(this.data);
  }

  getLabel(value: Milestone, lang: Lang, key: 'date' | 'role' | 'title' | 'description' = 'date') {
    return value[key][lang];
  }
}
