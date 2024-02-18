const removeFromArray = function (array, ...args) {
	for (let i = 0; i < args.length; i++) {
		let argToRemove = args[i];
		for (let d = 0; d < array.length; d++) {
			let arrItem = array[d];
			if (argToRemove === arrItem) {
				let removedElements = array.splice(d, 1);
				console.log(removedElements);
				d = d - 1;
			}
		}
	}

	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
