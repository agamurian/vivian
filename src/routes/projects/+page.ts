import { projects, projectsTranslations } from '$lib/content/api.ts';

export function load({ params }) {
	return {
		projects: projects.readByQuery({ limit: -1 }),
		projectsTranslations: projectsTranslations.readByQuery({ limit: -1 })
	};
}
