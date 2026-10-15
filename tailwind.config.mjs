/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			// Los valores reales viven en Layout.astro (:root y .dark)
			colors: {
				bg: token('bg'),
				surface: token('surface'),
				fg: token('fg'),
				muted: token('muted'),
				line: token('line'),
				accent: token('accent'),
				'accent-ink': token('accent-ink'),
			},
			fontFamily: {
				sans: ['"Onest Variable"', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
