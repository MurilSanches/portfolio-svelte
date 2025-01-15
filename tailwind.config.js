import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				blue: { 
					extraLight: '#E5EFF7',
					light: '#3A5662'
				},
				gray: {
					dark: '#28363F'
				
				},
				black: {
					dark: '#171E27'
				},
				brown: {
					base: '#723F33'
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries]
};
