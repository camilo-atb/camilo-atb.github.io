import { Lang } from "../core/i18n/lang.type";

export interface Technology {
  id: number;
  icon: string;
  translations: Record<Lang, string>; // <clave, valor>
}
