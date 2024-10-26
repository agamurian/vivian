import { writable } from 'svelte/store';

export const contentChanged = writable<boolean>(false);
export const hideNav = writable<boolean>(false);
export const white = writable('#fefefe');
export const black = writable('#101010');
export const backgroundColor = writable('#888888');
export const localtitle = writable('');

//make persisent stores

type language = 'en' | 'ru';
export const lang = writable<language>('en');

type themeType = 'light' | 'dark';
export const theme = writable<themeType>('light');
