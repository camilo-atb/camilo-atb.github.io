import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { MilestonesService } from '../../../../core/services/milestones.service';
import { LanguageService } from '../../../../core/i18n/language.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import type { Milestone } from '../../../../models/milestones.model';

type MilestoneCard = Omit<Milestone, 'date' | 'role' | 'title' | 'description'> & {
  date: string;
  role: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-milestones-and-participation',
  imports: [ScrollRevealDirective],
  templateUrl: './milestones-and-participation.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MilestonesAndParticipation {

  milestonesService = inject(MilestonesService);

  languageService = inject(LanguageService);

  milestones$ = combineLatest([
    this.milestonesService.getAll(),
    toObservable(this.languageService.lang)
  ] as const).pipe(
    map(([milestones, lang]) => milestones.map((milestone): MilestoneCard => ({
      ...milestone,
      date: this.milestonesService.getLabel(milestone, lang, 'date'),
      role: this.milestonesService.getLabel(milestone, lang, 'role'),
      title: this.milestonesService.getLabel(milestone, lang, 'title'),
      description: this.milestonesService.getLabel(milestone, lang, 'description'),
    })))
  );

  milestones = toSignal(this.milestones$, { initialValue: [] as MilestoneCard[] });
}
