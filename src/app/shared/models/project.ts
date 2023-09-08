import { LocalizedString } from './localized-string';

export class Project {
  title!: LocalizedString;
  subtitle!: LocalizedString;
  description!: LocalizedString;
  features!: LocalizedString[];
  tags!: string[];
  codeLink!: string;
  demoLink!: string;
  imagePath!: string;
}
