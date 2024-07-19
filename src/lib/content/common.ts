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
	{ href: '/', en: 'About', ru: 'О галерее' },
	{ href: '/artists', en: 'Artists', ru: 'Художники' },
	{ href: '/market', en: 'Market', ru: 'Маркет' },
	{ href: '/events', en: 'Exhibitions', ru: 'Выставки' }
];

export const meta = {
	title: { en: 'kerka gallery', ru: 'галерея керка' }
};
