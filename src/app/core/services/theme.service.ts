import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeColor = 'blue' | 'purple' | 'green';
export type ThemeMode = 'dark' | 'light';

const COLOR_VALUES: Record<ThemeColor, string> = {
  blue: '#1773cf',
  purple: '#9333ea',
  green: '#10b981',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  color = signal<ThemeColor>(this.loadColor());
  mode = signal<ThemeMode>(this.loadMode());

  constructor() {
    effect(() => {
      const color = this.color();
      const mode = this.mode();
      if (!this.isBrowser) return;

      // Persist
      localStorage.setItem('theme-color', color);
      localStorage.setItem('theme-mode', mode);

      // Apply CSS custom property for primary color
      document.documentElement.style.setProperty('--color-primary', COLOR_VALUES[color]);

      // Apply dark/light class
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    });
  }

  setColor(color: ThemeColor) {
    this.color.set(color);
  }

  setMode(mode: ThemeMode) {
    this.mode.set(mode);
  }

  toggleMode() {
    this.mode.update(m => m === 'dark' ? 'light' : 'dark');
  }

  private loadColor(): ThemeColor {
    if (!this.isBrowser) return 'blue';
    const stored = localStorage.getItem('theme-color');
    if (stored === 'blue' || stored === 'purple' || stored === 'green') return stored;
    return 'blue';
  }

  private loadMode(): ThemeMode {
    if (!this.isBrowser) return 'dark';
    const stored = localStorage.getItem('theme-mode');
    if (stored === 'dark' || stored === 'light') return stored;
    return 'dark';
  }
}
