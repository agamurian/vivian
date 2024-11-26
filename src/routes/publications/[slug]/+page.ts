import { publications, publicationsTranslations } from '$lib/content/api.ts';
/** @type {import('./$types').PageLoad} */

export function load({ params }) {
	return {
    slug: params.slug,
		publications: publications.readByQuery({ limit: -1 }),
		publicationsTranslations: publicationsTranslations.readByQuery({ limit: -1 })
	};
}
