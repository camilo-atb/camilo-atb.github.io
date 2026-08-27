import { Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { TechnologyService } from '../../../../core/services/technology.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../../../core/i18n/language.service';
import { IconService } from '../../../../core/services/icon.service';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-stacks',
  imports: [ScrollRevealDirective],
  templateUrl: './stacks.html',
})
export class Stacks {

  techService = inject(TechnologyService);

  languageService = inject(LanguageService);

  iconService = inject(IconService);

  technologies$ = combineLatest([
    this.techService.getAll(),
    toObservable(this.languageService.lang)
  ] as const).pipe(
    map(([techs, lang]) =>
      techs.map(t => ({
        ...t,
        label: t.translations[lang]
      }))
    )
  );

  technologies = toSignal(this.technologies$)
}
