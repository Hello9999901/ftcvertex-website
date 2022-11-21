/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			display: ['century-gothic'],
			hype: ['pixel-powerline'],
			body: [],
		},
		extend: {
			exeter: '#9a1d2f',
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
