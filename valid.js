function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(testElement) {
			return goodUsers.some(function(valid) {
				return valid.id === testElement.id;
			})
		})
	}
}
module.exports = checkUsersValid;