import { Lang } from '../core/i18n/lang.type';

type Translation = Record<Lang, string>;

export interface Project {
  id: number;
  emoji: string;
  title: Translation;
  description: Translation;
  tags: string[];
  url: string;
}
