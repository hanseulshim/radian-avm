/* eslint-disable */
const json = require('./pages.json')

module.exports.server = async () => {
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true
		},
		body: JSON.stringify(json, null, 2)
	}
}
