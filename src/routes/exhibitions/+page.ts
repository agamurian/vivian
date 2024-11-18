import { exhibitions, exhibitionsTranslations } from '$lib/content/api.ts';

export function load({ params }) {
	return {
		exhibitions: exhibitions.readByQuery({ limit: -1 }),
		exhibitionsTranslations: exhibitionsTranslations.readByQuery({ limit: -1 })
	};
}
