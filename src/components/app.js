import React from 'react';
import '../styles/index.scss'
import Common from "./common";

const App = () => {
	return (
		<div>
			<section className={'hello'}></section>
			<main>
				<section>
					<h1>Title react</h1>
					<Common />
				</section>
			</main>
		</div>
	);
};

export default App;
