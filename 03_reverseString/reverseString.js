const reverseString = function (string) {
	let reversedStringArray = [];
	for (let i = 0; i < string.length; i++) {
		reversedStringArray.unshift(string[i]);
	}
	return (reversedStringArray.join(""));
};

// Do not edit below this line
module.exports = reverseString;
