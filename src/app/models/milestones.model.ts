import { Lang } from "../core/i18n/lang.type";

type Translation = Record<Lang, string>;

export interface Milestone {
  id: number;
  date: Translation;
  role: Translation;
  title: Translation;
  description: Translation;
  status: string;
}
