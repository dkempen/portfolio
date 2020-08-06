import { LangString } from './lang-string';
import { LangStringArray } from './lang-string-array';

export class Project {
    title: LangString;
    subtitle: LangString;
    description: LangString;
    features: LangStringArray;
    tags: string[];
    codeLink: string;
    demoLink: string;
    imagePath: string;
}
