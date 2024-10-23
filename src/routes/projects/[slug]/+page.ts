import { error } from '@sveltejs/kit';
import { projects, projectsTranslations } from '$lib/content/api.ts';
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
		projects: projects.readByQuery({ limit: -1 }),
		projectsTranslations: projectsTranslations.readByQuery({ limit: -1 })
	};
}
