import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ContactInfo } from '../../models/contact.model';
import { Lang } from '../i18n/lang.type';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private data: ContactInfo[] = [
    {
      id: 1,
      availability: {
        en: 'Available for freelance & full-time roles',
        es: 'Disponible para freelance y tiempo completo'
      },
      socialLinks: [
        { id: 1, platform: 'github', url: 'https://github.com/camilo-atb' },
        { id: 2, platform: 'linkedin', url: 'https://www.linkedin.com/in/camilo-t%C3%A9llez' },
        { id: 3, platform: 'whatsapp', url: 'https://wa.me/573138338449' },
      ]
    }
  ];

  getInfo() {
    return of(this.data);
  }

  getAvailability(info: ContactInfo, lang: Lang) {
    return info.availability[lang];
  }
}
