import { Component, computed, inject, signal } from '@angular/core';
import { CertificationsService } from '../../../../core/services/certifications.service';
import { LanguageService } from '../../../../core/i18n/language.service';
import { LogoService } from '../../../../core/services/logo.service';
import { combineLatest, map } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-certifications',
  imports: [ScrollRevealDirective],
  templateUrl: './certifications.html',
})
export class Certifications {
  certificationService = inject(CertificationsService);

  languageService = inject(LanguageService);

  logoService = inject(LogoService);

  private readonly pageSize = 6;

  page = signal(0);

  certifications$ = combineLatest([
    this.certificationService.getAll(),
    toObservable(this.languageService.lang)
  ] as const).pipe(
    map(([certifications, lang]) =>
      certifications.map(t => ({
        ...t,
        label: t.translations[lang]
      }))
    )
  );

  allCertifications = toSignal(this.certifications$, { initialValue: [] });

  totalPages = computed(() => Math.ceil(this.allCertifications().length / this.pageSize));

  certifications = computed(() => {
    const start = this.page() * this.pageSize;
    return this.allCertifications().slice(start, start + this.pageSize);
  });

  prevPage() {
    this.page.update(p => Math.max(0, p - 1));
  }

  nextPage() {
    this.page.update(p => Math.min(this.totalPages() - 1, p + 1));
  }
}
