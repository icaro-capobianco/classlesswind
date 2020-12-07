import { h } from 'preact'
import './style.css'

export default function Main( { children } : { children : h.JSX.Element[] } ) {
	return (
		<main>
			<header>
				<h1>The main tag provides a distance from the borders of a larger screen.</h1>
			</header>
			{children}
		</main>
	)
}
