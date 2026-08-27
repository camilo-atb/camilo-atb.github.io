import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private readonly languageService = inject(LanguageService);

  readonly menuOpen = signal(false);

  readonly navItems = [
    { fragment: 'hero', label: 'nav.home' },
    { fragment: 'about', label: 'nav.about' },
    { fragment: 'stack', label: 'nav.stack' },
    { fragment: 'experience', label: 'nav.experience' },
    { fragment: 'milestones', label: 'nav.milestones' },
    { fragment: 'certifications', label: 'nav.certifications' },
    { fragment: 'contact', label: 'nav.contact' },
  ] as const;

  t(key: string): string {
    return this.languageService.t(key);
  }

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
