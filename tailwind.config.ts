import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'accent': '#365CCD',
				'off-white': '#E6E6E6',
				'black-1': '#252525',
				'grey-1': '#bbb',
				'grey-2': '#999',
			},
			fontFamily: {
				'display': ['Inter', 'Arial', 'sans-serif']
			}
		}
	},

	plugins: []
} satisfies Config;
