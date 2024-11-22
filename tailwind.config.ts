import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'accent': '#d65d0e',

				// Gruvbox Palette (https://github.com/morhetz/gruvbox?tab=readme-ov-file#palette)
				'gruvbox-bg0-hard1': '#f9f5d7',
				'gruvbox-bg0-hard2': '#1d2021',
				'gruvbox-bg0-soft1': '#f2e5bc',
				'gruvbox-bg0-soft2': '#32302f',
				'gruvbox-bg0': '#fbf1c7',
				'gruvbox-bg1': '#ebdbb2',
				'gruvbox-bg2': '#d5c4a1',
				'gruvbox-bg3': '#bdae93',
				'gruvbox-bg4': '#a89984',
				'gruvbox-fg0': '#282828',
				'gruvbox-fg1': '#3c3836',
				'gruvbox-fg2': '#504945',
				'gruvbox-fg3': '#665c54',
				'gruvbox-fg4': '#7c6f64',
				'gruvbox-grey': '#928374',
				'gruvbox-orange': '#d65d0e',
				'gruvbox-orange-dark': '#af3a03',
				'gruvbox-orange-light': '#fe8019',
				'gruvbox-red': '#cc241d',
				'gruvbox-red-dark': '#9d0006',
				'gruvbox-red-light': '#fb4934',
				'gruvbox-green': '#98971a',
				'gruvbox-green-dark': '#79740e',
				'gruvbox-green-light': '#b8bb26',
				'gruvbox-yellow': '#d79921',
				'gruvbox-yellow-dark': '#b57614',
				'gruvbox-yellow-light': '#fabd2f',
				'gruvbox-blue': '#458588',
				'gruvbox-blue-dark': '#076678',
				'gruvbox-blue-light': '#83a598',
				'gruvbox-purple': '#b16286',
				'gruvbox-purple-dark': '#8f3f71',
				'gruvbox-purple-light': '#d3869b',
				'gruvbox-aqua': '#689d6a',
				'gruvbox-aqua-dark': '#427b58',
				'gruvbox-aqua-light': '#8ec07c',
			},
			fontFamily: {
				'display': ['Cocogoose', 'Inter', 'Arial', 'sans-serif']
			},
			fontWeight: {
				'block-border': '101',
				'block-gradient': '102',
				'block-innerline': '103',
				'block-block-shadow-black': '104',
				'block-inline': '105',
				'block-letterpress': '106',
				'block-outlined': '107',
			}
		}
	},

	plugins: []
} satisfies Config;
