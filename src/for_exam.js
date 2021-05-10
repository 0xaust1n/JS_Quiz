const main = (k, ary) => {
	console.log(ary);
	console.log(k);
	// 從這裡開始寫你的CODE
	a;
};

const run = () => {
	let ary = getInput();
	let k = getRandomInt(2, Math.floor(ary.length / 2));
	console.log(main(k, ary));
};

const getInput = () => {
	let length = getRandomInt(6, 30);
	let inputArray = [];
	for (let i = 0; i < length; i++) {
		inputArray.push(getRandomInt(-25, 25));
	}
	return inputArray;
};

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};

run();
