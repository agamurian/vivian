import { writable } from 'svelte/store';

export const contentChanged = writable<boolean>(false);
export const hideNav = writable<boolean>(false);
export const white = writable('#fefefe');
export const black = writable('#1e1e1e');
export const backgroundColor = writable('#888888');
export const localtitle = writable('');

//make persisent stores
// Function to create a persistent writable store
function createPersistentStore<_type>(key:string, initialValue: _type | undefined) {
    // Load the initial value from localStorage, or use the provided initialValue
    let data = initialValue
    if(typeof localStorage !== 'undefined'){
      const storedValue = localStorage.getItem(key);
      data = storedValue ? JSON.parse(storedValue) : initialValue;
    }

    const store = writable<_type>(data);

    // Subscribe to the store and update localStorage whenever it changes
    store.subscribe(value => {
      if(typeof localStorage !== 'undefined'){
        localStorage.setItem(key, JSON.stringify(value));
      }
    });

    return store;
}

type language = "en" | "ru";
export const lang = createPersistentStore<language>("lang","ru");

type themeType = "light" | "dark";
export const theme = createPersistentStore<themeType>("theme","light");
