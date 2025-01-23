import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				"optimus-princeps": ['OptimusPrinceps', 'sans-serif'], // Substitua "sans-serif" por uma fallback se necessário
			},
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
					base: '#723F33',
					dark: '#856652'
				}
			},
			animation: {
				fadeFly: 'fadeFly 0.8s ease-out',
			},
			keyframes: {
				fadeFly: {
				  '0%': { transform: 'translateY(-50px)', opacity: '0' },
				  '100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		}
	},

	plugins: [typography, forms, containerQueries]
};
