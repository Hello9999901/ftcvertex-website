/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			display: ["century-gothic"],
			hype: ["PixelPowerline"],
			body: [],
		},
		extend: {
			exeter: "#9a1d2f",
			animation: {
				"spin-slow": "spin 0s linear alternate infinite",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
