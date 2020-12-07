import { h } from 'preact';
import { Route } from 'preact-router';
import { components } from '../modules';
import './tailwind.css';

export default function App () {
	return (
		<div>
			<components.Navigation/>
			<components.Grid/>
			<components.Image/>
			<components.Main>
				<components.Headers/>
				<components.Form/>
			</components.Main>
		</div>
	)
}
