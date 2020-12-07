import { h } from 'preact';
import './style.css'

export default function Form() {
	return (
		<section>
			<article>
				<header>
					<h3>Forms</h3>
				</header>
				<form action="#">
					<label> Buttons <input type="button" value="Type Button" /> <button>Button tag</button> <input type="Submit"/> </label>
					<label> Reset <input type="reset"/></label>

					<label> image <input type="image" src="https://via.placeholder.com/400x300" /></label>
					<label> file <input type="file"/></label>

					<label><input type="checkbox"/> checkbox </label>
					<label><input type="radio"/> radio </label>
					<label> color <input type="color"/></label>

					<label> range <input type="range"/></label>

					<label> date <input type="date"/></label>
					<label> datetime-local <input type="datetime-local"/></label>
					<label> month <input type="month"/></label>
					<label> week <input type="week"/></label>
					<label> time <input type="time"/></label>

					<label> text <input type="text"/></label>
					<label> search <input type="search"/></label>
					<label> email <input type="email"/></label>
					<label> number <input type="number"/></label>
					<label> password <input type="password"/></label>
					<label> tel <input type="tel"/></label>
					<label> url <input type="url"/></label>
				</form>
			</article>
		</section>
	)
} 
