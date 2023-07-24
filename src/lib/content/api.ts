import { Directus } from '@directus/sdk';
const directus = new Directus('http://62.113.115.216:8055');

// Working with translations
export const locale_mapping = { en: 'en-US', ru: 'ru-RU', fr: 'fr-FR' };

export function translationOf(items, translations, lang): string {
	const trKeys = items['translations'];
	for (const key of trKeys) {
		const tr = translations.find((_) => _.id === key);
		if (tr.languages_id === locale_mapping[lang]) {
			return tr;
		}
	}
}

// Exporting itemss
export const events = directus.items('events');
export const eventsTranslations = directus.items('events_translations');
