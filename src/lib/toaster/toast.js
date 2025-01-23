import { writable } from 'svelte/store';
import { ToastTypes } from './toastTypes';

const createToastStore = () => {
    const { subscribe, update } = writable([]);

    return {
        subscribe,
        send: (/** @type {string} */ message, type = ToastTypes.INFO) => {
            const id = Math.floor(Math.random() * 10000);
            update(toasts => {
                // Limita para 3 toasts simultâneos
                const newToasts = [...toasts, { id, message, type }];
                return newToasts.slice(-3);
            });

            // Remove o toast após 3 segundos
            setTimeout(() => {
                update(toasts => toasts.filter(t => t.id !== id));
            }, 3000);
        }
    };
};

export const toast = createToastStore();