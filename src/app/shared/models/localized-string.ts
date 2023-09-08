export class LocalizedString {
  en!: string;
  nl!: string;
}

export function toString(string: LocalizedString, language: string) {
  return language === 'nl' ? string.nl : string.en;
}
