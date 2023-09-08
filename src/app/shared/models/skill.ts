import { LocalizedString } from './localized-string';

export class Skill {
  icon!: string;
  title!: LocalizedString;
  description!: LocalizedString;
  languages?: string[];
  tools!: string[];
}
