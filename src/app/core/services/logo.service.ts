import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogoService {
  getLogo(name: string): string{
    return `/logos/${name}.png`
  }
}
