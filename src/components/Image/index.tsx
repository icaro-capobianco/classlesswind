import { h } from 'preact'
import './style.css'

export default function Image() {
	return (
		<section>
			<header>
				<h2>Images</h2>
			</header>
			<figure>
				<img src="https://via.placeholder.com/400x300" alt="responsive"/>
				<figcaption>The image will keep its dimensions with a limit of the width of the parent element, being centralized with margin. <br/> The caption is also centralized.</figcaption>
			</figure>
		</section>
	)
}
