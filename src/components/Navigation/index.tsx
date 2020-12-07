import { h } from 'preact';
import './style.css';

export default function Navigation() {
	return (
		<nav id="nav" >
			<ul>
				<li>
					<a href="#nav">
						Navbar
					</a>
				</li>
				<li>
					<a href="/Home">
						Home
					</a>
					<ul>
						<li>
							<a href="/Home">
								Take me home
							</a>
						</li>
						<li>
							<a href="/Home">
								Country Roads
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}
