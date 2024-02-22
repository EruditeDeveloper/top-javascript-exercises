const palindromes = function (string) {
	// 1. remove everything except letters then make lowercase

	let pureString = "";

	let firstHalf,
		secondHalf,
		middleChar = "";

	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if (
			(char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
			(char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
		) {
			console.log("if true it means it is indeed a letter");
			pureString += char;
		}
	}

	// make sure to remove all numbers from the final pureString before moving forward.

	let pureStringWithoutNumbers = "";
	for (let i = 0; i < pureString.length; i++) {
		if (isNaN(Number(pureString[i]))){
			pureStringWithoutNumbers+= pureString[i];
		}
	}
	
	pureString = pureStringWithoutNumbers;

	let length = pureString.length;
	pureString = pureString.toLowerCase();

	// 2. split string at middle index for odd beginning part, middle index, last part. [0][x][-1]
	// 3. for even split string in 2 parts

	if (length % 2 === 0) {
		firstHalf = pureString.substring(0, length / 2);
		secondHalf = pureString.substring(length / 2);
	} else {
		let middleIndex = Math.floor(length / 2);
		middleChar = pureString[middleIndex];
		firstHalf = pureString.slice(0, middleIndex);
		secondHalf = pureString.slice(middleIndex + 1);
	}

	// 4. reverse one of them then use one loop to iterate and test each one. to see if they are the exact same char

	let reversedStringArray = [];
	for (let i = 0; i < secondHalf.length; i++) {
		reversedStringArray.unshift(secondHalf[i]);
	}

	let reversedSecondHalf = reversedStringArray.join("");

	isEachCharacterTheSameArray = [];
	if (firstHalf.length === reversedSecondHalf.length) {
		for (let i = 0; i < reversedSecondHalf.length; i++) {
			if (firstHalf[i] === reversedSecondHalf[i]) {
				isEachCharacterTheSameArray.push(true);
			} else {
				isEachCharacterTheSameArray.push(false);
			}
		}
	}
	for (let i = 0; i < isEachCharacterTheSameArray.length; i++) {
		if (isEachCharacterTheSameArray[i] === false) {
			return false;
		}
	}

	return true;
};
// Do not edit below this line
module.exports = palindromes;
