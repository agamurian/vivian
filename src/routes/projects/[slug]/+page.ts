import { error } from '@sveltejs/kit';
import { events, eventsTranslations } from '$lib/content/api.ts';
/** @type {import('./$types').PageLoad} */

export function load({ params }) {
	if (params.slug === 'hello-world') {
		return {
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}
	return {
    slug: params.slug,
		events: events.readByQuery({ limit: -1 }),
		eventsTranslations: eventsTranslations.readByQuery({ limit: -1 })
	};
}
