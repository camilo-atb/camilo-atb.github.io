import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  getIcon(icon: string): string{
    return `/icons/${icon}.svg`
  }
}
