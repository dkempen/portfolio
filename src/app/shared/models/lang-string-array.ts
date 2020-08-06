export class LangStringArray {
    en: string[];
    nl: string[];
}

export function toLanguageArray(langStringArray: LangStringArray, language: string) {
    if (language === 'nl') {
        return langStringArray.nl;
    }
    return langStringArray.en;
}
