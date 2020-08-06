export class LangString {
    en: string;
    nl: string;
}

export function toLanguage(langString: LangString, language: string) {
    if (language === 'nl') {
        return langString.nl;
    }
    return langString.en;
}
