const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (array) {
	let sum = 0;
	array.forEach((element) => {
		if (typeof element === "number") {
			sum = sum + element;
		}
	});
	return sum;
};

const multiply = function (numArr) {
	let total;

	for (let i = 0; i < numArr.length; i++) {
		if (total) {
			total *= numArr[i];
		} else {
			total = numArr[i];
		}
	}

	return total;
};

const power = function (num1, num2) {
	return num1 ** num2;
};

const factorial = function (num) {
	let numberArray = [];
	for (let i = num; i > 0; i--) {
		numberArray.push(i);
	}

	let number = numberArray.reduce((acc, value) => acc * value, 1);

	return number;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
