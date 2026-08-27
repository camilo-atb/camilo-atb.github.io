import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ExperienceService } from '../../../../core/services/experience.service';
import { LanguageService } from '../../../../core/i18n/language.service';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import type { Experience as ExperienceModel } from '../../../../models/experience.model';

type ExperienceCard = Omit<ExperienceModel, 'company' | 'contractType' | 'period' | 'role' | 'highlights'> & {
  company: string;
  contractType: string;
  period: string;
  role: string;
  highlights: string[];
};

@Component({
  selector: 'app-experience',
  imports: [ScrollRevealDirective],
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {

  experienceService = inject(ExperienceService);

  languageService = inject(LanguageService);

  experiences$ = combineLatest([
    this.experienceService.getAll(),
    toObservable(this.languageService.lang)
  ] as const).pipe(
    map(([experiences, lang]) => experiences.map((experience): ExperienceCard => ({
      ...experience,
      company: this.experienceService.getLabel(experience, lang, 'company'),
      contractType: this.experienceService.getLabel(experience, lang, 'contractType'),
      period: this.experienceService.getLabel(experience, lang, 'period'),
      role: this.experienceService.getLabel(experience, lang, 'role'),
      highlights: this.experienceService.getHighlights(experience, lang),
    })))
  );

  experiences = toSignal(this.experiences$, { initialValue: [] as ExperienceCard[] });

}
