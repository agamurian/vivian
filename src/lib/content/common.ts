interface menuItem {
	href: string;
	en: string;
	ru: string;
}
interface translation {
	ru: string | Array<string>;
	en: string | Array<string>;
}

export const menu: Array<menuItem> = [
	{ href: '/', en: 'About', ru: 'Об авторе' },
	{ href: '/projects', en: 'Projects', ru: 'Проекты' },
	{ href: '/news', en: 'News', ru: 'Новости' },
	{ href: '/articles', en: 'Publications', ru: 'Публикации' },
	{ href: '/exhibitions', en: 'Exhibitions', ru: 'Выставки' }
];

export const meta = {
	title: { en: 'Vivian Del Rio', ru: 'Вивиан Дель Рио' }
};
