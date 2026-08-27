import { Lang } from "../core/i18n/lang.type";

export interface Certification {
  id: number;
  name: string;
  entity: string;
  logoEntity: string;
  date: string;
  translations: Record<Lang, string>;
}
