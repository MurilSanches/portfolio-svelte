import { writable } from 'svelte/store';

const createDarkModeStore = () => {
  const storedValue = typeof window !== 'undefined' 
    ? localStorage.getItem('darkMode') === 'true'
    : false;

  const { subscribe, set, update } = writable(storedValue);

  return {
    subscribe,
    toggle: () => update(value => {
      const newValue = !value;

      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', newValue.toString());
      }
      
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', newValue);
      }
      return newValue;
    }),
    set: (value) => {
      set(value);
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', value);
      }
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', value);
      }
    }
  };
};

export const darkMode = createDarkModeStore();