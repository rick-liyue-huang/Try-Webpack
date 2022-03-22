import React from 'react';
import '../styles/index.scss'
import Common from "./common";
import pic from '../img/1.png'

const App = () => {
	return (
		<div>
			<section className={'hello'} />
			<main>
				<section>
					<h1>Title react</h1>

					<Common />
				</section>
			</main>
			<img src={pic} alt="" width='300' height={'200'} />
		</div>
	);
};

export default App;
