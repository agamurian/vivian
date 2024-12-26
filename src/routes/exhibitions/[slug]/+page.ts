import { exhibitions, exhibitionsTranslations } from '$lib/content/api.ts';
/** @type {import('./$types').PageLoad} */

export function load({ params }) {
	return {
    slug: params.slug,
		exhibitions: exhibitions.readByQuery({ limit: -1 }),
		exhibitionsTranslations: exhibitionsTranslations.readByQuery({ limit: -1 })
	};
}
