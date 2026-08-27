import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ContactService } from '../../../../core/services/contact.service';
import { LanguageService } from '../../../../core/i18n/language.service';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import type { ContactInfo, ContactLink } from '../../../../models/contact.model';

type ContactView = ContactInfo & {
  availabilityLabel: string;
};

@Component({
  selector: 'app-contact-preview',
  imports: [ScrollRevealDirective],
  templateUrl: './contact-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPreview {
  contactService = inject(ContactService);

  languageService = inject(LanguageService);

  contact$ = combineLatest([
    this.contactService.getInfo(),
    toObservable(this.languageService.lang)
  ] as const).pipe(
    map(([infoList, lang]) => {
      const info = infoList[0];
      if (!info) return null;
      return {
        ...info,
        availabilityLabel: this.contactService.getAvailability(info, lang),
      } satisfies ContactView;
    })
  );

  contact = toSignal(this.contact$, { initialValue: null as ContactView | null });

  getLink(contact: ContactView | null, platform: 'github' | 'linkedin' | 'whatsapp'): ContactLink | null {
    if (!contact) return null;
    return contact.socialLinks.find(link => link.platform === platform) ?? null;
  }
}
