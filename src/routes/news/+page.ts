import { news, newsTranslations } from '$lib/content/api.ts';

export function load({ params }) {
	return {
		news: news.readByQuery({ limit: -1 }),
		newsTranslations: newsTranslations.readByQuery({ limit: -1 })
	};
}
