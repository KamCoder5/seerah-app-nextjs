import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				korma: {
					DEFAULT: "#814F0F",
					50: "#ECAD5C",
					100: "#EAA349",
					200: "#E69125",
					300: "#CA7C18",
					400: "#A66513",
					500: "#814F0F",
					600: "#6F440D",
					700: "#5C390B",
					800: "#4A2D09",
					900: "#382207",
					950: "#2F1D05",
				},
			},
		},
	},
	plugins: [],
};
export default config;
