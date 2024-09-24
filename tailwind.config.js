/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			bs: '320px',

			sm: '375px',

			md: '425px',

			lg: '768px',

			xl: '1024px',

			'2xl': '1440px'
		},
		backgroundImage: {
			header: "url('/header.png')",
			parallax: "url('/paralax.jpg')",
			apollo: "url('/apollo.jpg')",
			union: "url('/union.svg')",
			section: "url('/bg_two_section.gif')",
		},
		colors: {
			white: '#FFFFFF',
			lite_grey: '#9E9E9E',
			medium_grey: '#747474',
			black: '#000000',
			yelow: "#fdd346",
			app: '#06014066'
		},
		fontFamily: {
			lato: ['Lato', 'sans-serif'],
			audiowide: ['Audiowide', 'sans-serif']
		},
		backgroundPosition: {
			top_center: 'top 60px center'
		},
		extend: {}
	},
	plugins: []
};
