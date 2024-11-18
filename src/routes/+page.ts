import { mainPage, mainPageTranslations } from '$lib/content/api.ts';

export function load({ params }) {
	return {
		mainPage: mainPage.readByQuery({ limit: -1 }),
		mainPageTranslations: mainPageTranslations.readByQuery({ limit: -1 })
	};
}
