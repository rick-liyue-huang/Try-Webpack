import React, {useState} from 'react';

const Common = () => {

	const [test, setTest] = useState({});
	return (
		<div>
			<h3>{test.a}</h3>
			<button onClick={() => setTest({a: '1'})}>add</button>
		</div>
	);
};

export default Common;
