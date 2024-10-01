import { events, eventsTranslations } from '$lib/content/api.ts';

export function load({ params }) {
	return {
		events: events.readByQuery({ limit: -1 }),
		eventsTranslations: eventsTranslations.readByQuery({ limit: -1 })
	};
}
