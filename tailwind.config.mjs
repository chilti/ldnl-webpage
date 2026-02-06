/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Colores UNAM
				'unam-blue': {
					50: '#E6F0F7',
					100: '#CCE1EF',
					200: '#99C3DF',
					300: '#66A5CF',
					400: '#3387BF',
					500: '#003D82', // Azul UNAM principal
					600: '#003170',
					700: '#00255E',
					800: '#00194C',
					900: '#000D3A',
				},
				'unam-gold': {
					50: '#FAF7F0',
					100: '#F5EFE1',
					200: '#EBDFC3',
					300: '#E1CFA5',
					400: '#D7BF87',
					500: '#C5A572', // Dorado UNAM
					600: '#9E845B',
					700: '#776344',
					800: '#50422D',
					900: '#292116',
				},
				'accent-cyan': {
					50: '#E6F7FB',
					100: '#CCEFF7',
					200: '#99DFEF',
					300: '#66CFE7',
					400: '#33BFDF',
					500: '#00B4D8',
					600: '#0090AD',
					700: '#006C82',
					800: '#004857',
					900: '#00242C',
				},
				'accent-purple': {
					50: '#F3E6FA',
					100: '#E7CCF5',
					200: '#CF99EB',
					300: '#B766E1',
					400: '#9F33D7',
					500: '#7209B7',
					600: '#5B0792',
					700: '#44056E',
					800: '#2D0349',
					900: '#160225',
				},
			},
			fontFamily: {
				display: ['Poppins', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			animation: {
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'float': 'float 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
			},
			keyframes: {
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #003D82 0%, #00B4D8 100%)',
				'gradient-accent': 'linear-gradient(135deg, #7209B7 0%, #00B4D8 100%)',
				'gradient-gold': 'linear-gradient(135deg, #003D82 0%, #C5A572 100%)',
			},
		},
	},
	plugins: [],
}
