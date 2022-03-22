import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

const Common = () => {
	const id = uuid();
	const [test, setTest] = useState({a: ''});
	return (
		<div>
			<h3>{test && test.a}</h3>
			{id}
			<button onClick={() => setTest({a: '1'})}>add</button>
		</div>
	);
};

export default Common;
