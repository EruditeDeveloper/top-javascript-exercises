const sumAll = function (num1, num2) {
	let greaterNum;
	let smallerNum;
	let inBetweenArray = [];
    if ((num1 < 0 || num2 < 0) || (typeof num1 !== 'number' || typeof num2 !== 'number')) {
        return "ERROR"
    }
	if (num1 > num2) {
		greaterNum = num1;
		smallerNum = num2;
	} else {
		greaterNum = num2;
		smallerNum = num1;
	}
	for (let i = smallerNum; i <= greaterNum; i++) {
        inBetweenArray.push(i)
    }
    const sum = inBetweenArray.reduce((accumulator, CurrentValue) => accumulator + CurrentValue, 0)
    return sum

};

// Do not edit below this line
module.exports = sumAll;
