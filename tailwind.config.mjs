/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'purple-dark': '#4C3F87',
				'purple-light': '#9683D4',
				'purple-200': '#7A22EC',
			},
		},
	},
	plugins: [],
}
