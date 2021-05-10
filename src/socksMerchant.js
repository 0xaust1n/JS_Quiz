const main = (ar) => {
	console.log(ar);
	//從這行下方開始撰寫
};

//以下為input 產生function 請勿修改
const run = () => {
	let ar = getInput();
	let ans = main(ar);
	console.log(`你的答案為:${ans}`);
	test(ans, ar);
};

//產生input
const getInput = () => {
	let length = getRandomInt(1, 100);
	let inputArray = [];
	for (let i = 0; i < length; i++) {
		inputArray.push(getRandomInt(1, 100));
	}
	return inputArray;
};

//產生亂亂數
const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};

//回傳result
const getResult = (ar) => {
	let map = new Map();
	let c = 0;
	ar.forEach((x) => {
		let temp = map.has(x) ? map.get(x) + 1 : 1;
		c = temp % 2 == 0 ? c + 1 : c;
		map.set(x, temp);
	});
	return c;
};

//測試
const test = (ans, ar) => {
	let real = getResult(ar);
	let result = ans == real ? '正確' : '錯誤';
	console.log(`你的答案為${result}的`);
};

run();
