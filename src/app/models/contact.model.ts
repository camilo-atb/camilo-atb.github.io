import { Lang } from '../core/i18n/lang.type';

type Translation = Record<Lang, string>;

export type ContactPlatform = 'github' | 'linkedin' | 'whatsapp';

export interface ContactLink {
  id: number;
  platform: ContactPlatform;
  url: string;
}

export interface ContactInfo {
  id: number;
  availability: Translation;
  socialLinks: ContactLink[];
}
