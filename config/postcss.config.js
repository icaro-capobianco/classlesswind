const path = require( 'path' );
const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = {
	plugins: {
		tailwindcss: { config: path.resolve( __dirname + '/tailwind.config.js' ) }
	}
}