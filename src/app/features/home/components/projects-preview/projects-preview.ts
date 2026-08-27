import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ProjectsService } from '../../../../core/services/projects.service';
import { LanguageService } from '../../../../core/i18n/language.service';
import type { Project } from '../../../../models/project.model';

type ProjectCard = Omit<Project, 'title' | 'description'> & {
  title: string;
  description: string;
};

@Component({
  selector: 'app-projects-preview',
  imports: [],
  templateUrl: './projects-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPreview {

  projectsService = inject(ProjectsService);

  languageService = inject(LanguageService);

  projects$ = combineLatest([
    this.projectsService.getAll(),
    toObservable(this.languageService.lang)
  ] as const).pipe(
    map(([projects, lang]) => projects.map((project): ProjectCard => ({
      ...project,
      title: this.projectsService.getLabel(project, lang, 'title'),
      description: this.projectsService.getLabel(project, lang, 'description'),
    })))
  );

  projects = toSignal(this.projects$, { initialValue: [] as ProjectCard[] });

}
