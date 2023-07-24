import { events, eventsTranslations } from '$lib/content/api.ts';

export function load({ params }) {
	return {
		event: events.readByQuery({
			filter: {
				url: params.slug
			}
		}),
		eventsTranslations: eventsTranslations.readByQuery({ limit: -1 })
	};
}
