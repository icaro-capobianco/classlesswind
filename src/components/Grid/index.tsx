import { h } from 'preact';
import './style.css'

export default function Grid() {
	return (
		<div>
			<section>
				<header>
					<h2>Sections and responsive articles</h2>
					<p>This is a heading inside a section, below are the articles</p>
				</header>
				<article>
				</article>
				<article>
					<header>
						<h3>These article are responsive</h3>
					</header>
					<p>The articles directly nested in the section are responsive</p>
				</article>
				<article>
					<header>
						<h3>Header inside an article</h3>
					</header>
					<p>The articles directly nested in the section are styled like cards</p>
				</article>
				<article>
				</article>
			</section>
			<header>
				<h2>Examples</h2>
				<p>The first is always occupying the available space, the following articles occupy 1/4, 1/3, 1/2 and the entire section width</p>
			</header>
			<section>
				<article><header><h3>1</h3></header></article>
			</section>
			<section>
				<article><header><h3>1</h3></header></article>
				<article><header><h3>2</h3></header></article>
			</section>
			<section>
				<article><header><h3>1</h3></header></article>
				<article><header><h3>2</h3></header></article>
				<article><header><h3>3</h3></header></article>
			</section>
			<section>
				<article><header><h3>1</h3></header></article>
				<article><header><h3>2</h3></header></article>
				<article><header><h3>3</h3></header></article>
				<article><header><h3>4</h3></header></article>
				<article><header><h3>5</h3></header><p>The 5th wont behave like the first, even when alone in a row</p></article>
			</section>
			<section>
				<header>
					<h2>Section without responsive articles</h2>
				</header>
				<div>
					<article>
						<header>
							<h3>Article that is not styled nor responsive</h3>
							<small>There is a div between this article and the section, preventing the application of the css properties seen in the first section</small>
						</header>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iusto voluptate cupiditate unde ratione velit fuga eius temporibus, perferendis a vero dolor quis praesentium nihil dignissimos impedit id iste ipsum culpa necessitatibus blanditiis. Nobis modi eligendi iusto distinctio quo, eos sunt nemo laboriosam saepe aliquid repellendus id dicta, explicabo repellat nam iste delectus rem reiciendis enim suscipit! Doloremque est, placeat officiis incidunt quibusdam earum nihil assumenda sed suscipit reiciendis maxime consequatur eos facilis, eum laborum harum, culpa obcaecati porro quod aut pariatur blanditiis? Eum adipisci libero asperiores perferendis harum aliquid unde quas! Nobis eos soluta quaerat sit minus fuga. Laborum eius consectetur porro culpa, itaque fugit aperiam quia corporis deserunt accusamus, asperiores quo nisi tenetur. Sint quas aliquam veritatis iure.</p>
					</article>
				</div>
			</section>
		</div>
	)
}
