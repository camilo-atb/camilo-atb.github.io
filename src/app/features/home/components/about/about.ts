import {Component, inject} from '@angular/core';
import {LanguageService} from '../../../../core/i18n/language.service';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
})
export class About {
  langService = inject(LanguageService)
}
