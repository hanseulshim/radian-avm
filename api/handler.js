/* eslint-disable */
const json = require('./pages.json')

module.exports.server = async () => {
	return {
		statusCode: 200,
		body: JSON.stringify(json, null, 2)
	}
}
