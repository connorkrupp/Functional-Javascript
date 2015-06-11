function getShortMessages(messages) {
	return messages.filter(function (long){
		return (long.message.length < 50)
	}).map(function(element) {
		return element.message;
	})
}

module.exports = getShortMessages;