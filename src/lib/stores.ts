import { writable } from 'svelte/store';

export const hideNav = writable<boolean>(false);
type themeType = 'light' | 'dark';
export const theme = writable<themeType>('light');
export const white = writable('#ffffff');
export const black = writable('#0a0a0a');
export const backgroundColor = writable('#888888');
export const localtitle = writable('');

type language = 'en' | 'ru';
export const lang = writable<language>('en');
