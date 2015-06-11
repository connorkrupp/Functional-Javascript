function repeat(operation, num) {
	if (num <= 0) {
		return
	} else {
		operation();
		repeat(operation, --num);
	}
}

module.exports = repeat;