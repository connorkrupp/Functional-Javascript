function countWords(inputWords) {
	return inputWords.reduce(function(total, second) {
		total[second] = ++total[second] || 1;
		return total;
	}, {})
}
module.exports = countWords;