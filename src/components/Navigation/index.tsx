import { h } from 'preact';
import './style.css';

export default function Navigation() {
	return (
		<nav id="nav" >
			<ul>
				<li>
					<a href="#first">
						First
					</a>
				</li>
				<li>
					<a href="#">
						Dropdown
					</a>
					<ul>
						<li>
							<a href="#second">
								Second
							</a>
						</li>
						<li>
							<a href="#third">
								Third
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}
