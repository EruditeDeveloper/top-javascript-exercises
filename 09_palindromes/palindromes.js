const palindromes = function (string) {
	let result;
	for (let i; i < string.length; i++) {
		let char = string[i];
        char.toLower()
        if ()
	}

	if (string.length % 2 !== 0) {
		let parts = string.split("", 2);
		let firstHalf = parts[0];
		let secondHalf = parts[1];
	} else {
		let middle = Math.floor(string.length / 2);
		let firstPart = string.substring(0, middle);
		let secondPart = string.substring(middle);
	}
};

// Do not edit below this line
module.exports = palindromes;
