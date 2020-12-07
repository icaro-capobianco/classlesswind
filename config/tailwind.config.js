module.exports = {
	purge: {
	    layers: ['utilities', 'components'],
		enabled: true,
		content: [
			"../src/**/*.ts",
			"../src/**/*.tsx",
			"../src/**/*.css",
			"../src/**/*.js",
			"../src/**/*.jsx",
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				'col-2': 'calc(50% - 0.5rem)',
				'col-3': 'calc(33% - .47rem)',
				'col-4': 'calc(25% - .75rem)',
			},
			colors: {
				1: '#5D5C61',
				2: '#379683',
				3: '#FFFFFF',
				4: '#7395AE',
				5: '#B1A296'
			}
		}
	},
	variants: {
		display: ['responsive', 'group-hover'],
		visibility: ['responsive', 'group-hover']
	},
	plugins: [],
}