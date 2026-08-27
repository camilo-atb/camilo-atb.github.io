import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Lang } from '../i18n/lang.type';
import { Experience } from '../../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {

  private data: Experience[] = [
    {
      id: 5,
      company: { en: 'CLTech', es: 'CLTech' },
      contractType: { en: 'Full-time', es: 'Tiempo completo' },
      period: { en: 'Aug 2026 – Present', es: 'Ago 2026 – Actualidad' },
      role: { en: 'Learning Analyst', es: 'Analista de Aprendizaje' },
      highlights: []
    },
    {
      id: 4,
      company: { en: 'CLTech', es: 'CLTech' },
      contractType: { en: 'Internship', es: 'Prácticas' },
      period: { en: 'Feb 2026 – Aug 2026', es: 'Feb 2026 – Ago 2026' },
      role: { en: 'Software Analysis & Development Intern', es: 'Practicante de Análisis y Desarrollo de Software (ADSO)' },
      highlights: [
        { en: 'Technical documentation of applications and development processes.', es: 'Apoyo en la documentación técnica de aplicaciones y procesos de desarrollo de software.' },
        { en: 'Participation in application migration from legacy technologies to Angular.', es: 'Participación en procesos de migración de aplicaciones desde tecnologías existentes hacia Angular.' },
        { en: 'Implementation and execution of unit and functional tests to ensure software quality.', es: 'Apoyo en la implementación y ejecución de pruebas unitarias y funcionales para validar la calidad del software.' },
        { en: 'Development, maintenance, and improvement of organizational applications.', es: 'Participación en actividades de desarrollo, mantenimiento y mejora de aplicaciones de la organización.' },
      ]
    },
    {
      id: 3,
      company: { en: 'DANE – National Administrative Department of Statistics', es: 'DANE – Departamento Administrativo Nacional de Estadística' },
      contractType: { en: 'Contract', es: 'Contrato' },
      period: { en: 'Oct 2024 – Dec 2024', es: 'Oct 2024 – Dic 2024' },
      role: { en: 'Route Supervisor', es: 'Supervisor de Ruta' },
      highlights: [
        { en: 'Task assignment and support for route census takers, ensuring objectives of the National Urban Economic Census were met.', es: 'Acompañamiento y asignación de tareas a los censistas de ruta, asegurando el cumplimiento de los objetivos del Censo Económico Nacional Urbano.' },
        { en: 'Supervision of geographic coverage and verification of data quality.', es: 'Supervisión de la cobertura geográfica de las rutas asignadas y verificación de la calidad de los datos recolectados.' },
        { en: 'Incident resolution and deadline compliance monitoring during data collection.', es: 'Apoyo en la resolución de incidencias durante el proceso de recolección de información y seguimiento al cumplimiento de los plazos establecidos.' },
      ]
    },
    {
      id: 2,
      company: { en: 'Municipal Government of Guaduas, Cundinamarca', es: 'Alcaldía Municipal de Guaduas, Cundinamarca' },
      contractType: { en: 'Contract', es: 'Contratista' },
      period: { en: 'Jun 2023 – Dec 2023', es: 'Jun 2023 – Dic 2023' },
      role: { en: 'Contractor – Civil Engineer', es: 'Contratista - Ingeniero Civil' },
      highlights: [
        { en: 'Technical, architectural, structural, urban, and legal evaluation of urban planning license applications.', es: 'Evaluación técnica, arquitectónica, estructural, urbanística y jurídica de solicitudes de licencias urbanísticas.' },
        { en: 'Review of blueprints, calculation documents, structural designs, and required documentation.', es: 'Revisión de planos, memorias de cálculo, diseños estructurales y documentación requerida para los trámites.' },
        { en: 'Support in drafting administrative acts related to urban planning licenses.', es: 'Apoyo en la elaboración y emisión de actos administrativos relacionados con licencias urbanísticas y otros trámites.' },
        { en: 'Accompaniment to police inspections for urban regulation compliance verification.', es: 'Acompañamiento a inspecciones policivas para verificar el cumplimiento de las normas urbanísticas municipales.' },
      ]
    },
    {
      id: 1,
      company: { en: 'Municipal Government of Guayabal de Síquima', es: 'Alcaldía Municipal de Guayabal de Síquima' },
      contractType: { en: 'Internship', es: 'Prácticas' },
      period: { en: 'Feb 2022 – Jun 2022', es: 'Feb 2022 – Jun 2022' },
      role: { en: 'Civil Engineering Intern', es: 'Practicante de Ingeniería Civil' },
      highlights: [
        { en: 'Preparation and submission of administrative and technical reports.', es: 'Elaboración y presentación de informes administrativos y técnicos al supervisor.' },
        { en: 'Technical site visits to verify compliance with project specifications.', es: 'Realización de visitas técnicas a obras y proyectos para verificar el cumplimiento de especificaciones y normativas.' },
        { en: 'Administrative support in the Planning Office, including user assistance and request management.', es: 'Apoyo administrativo en la Secretaría de Planeación, incluyendo atención a usuarios y gestión de solicitudes y trámites.' },
        { en: 'Budget preparation and unit price analysis.', es: 'Apoyo en la elaboración de presupuestos y análisis de precios unitarios.' },
        { en: 'Monitoring and supervision of contracted and executed construction projects.', es: 'Seguimiento y apoyo en el control y supervisión de obras contratadas y ejecutadas por la entidad.' },
      ]
    },
  ];

  getAll() {
    return of(this.data);
  }

  getLabel(experience: Experience, lang: Lang, key: 'company' | 'contractType' | 'period' | 'role') {
    return experience[key][lang];
  }

  getHighlights(experience: Experience, lang: Lang) {
    return experience.highlights.map(highlight => highlight[lang]);
  }
}
