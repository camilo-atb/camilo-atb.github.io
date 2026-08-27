import { Lang } from '../core/i18n/lang.type';

type Translation = Record<Lang, string>;

export interface Experience {
  id: number;
  company: Translation;
  contractType: Translation;
  period: Translation;
  role: Translation;
  highlights: Translation[];
}
