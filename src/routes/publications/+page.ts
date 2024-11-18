import { publications, publicationsTranslations } from '$lib/content/api.ts';

export function load({ params }) {
	return {
		publications: publications.readByQuery({ limit: -1 }),
		publicationsTranslations: publicationsTranslations.readByQuery({ limit: -1 })
	};
}
