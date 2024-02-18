const convertToCelsius = function (temperature) {
	let temp = temperature;
	let convertedTemp = ((temp - 32) * 5) / 9;
    let roundedConvertedTemp = Math.round(convertedTemp * 10) /10
	return roundedConvertedTemp;
};

const convertToFahrenheit = function (temperature) {
	let temp = temperature;
	let convertedTemp = (temp * 9) / 5 + 32;
    let roundedConvertedTemp = Math.round(convertedTemp * 10) /10

	return roundedConvertedTemp;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
