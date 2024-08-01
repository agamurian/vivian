import { writable } from 'svelte/store';

export const hideNav = writable<boolean>(false);
type themeType = 'light' | 'dark';
export const theme = writable<themeType>('light');
export const white = writable('#eeeeee');
export const black = writable('#1a1a1a');
export const backgroundColor = writable('#888888');
export const localtitle = writable('');

type language = 'en' | 'ru';
export const lang = writable<language>('en');
