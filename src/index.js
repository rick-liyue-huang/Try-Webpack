
const obj = {
	first :1,
	second: 2,
	last: 5
}

const sheep = {
	...obj,
	grass: true,
	eat: false
}

console.log(sheep);
