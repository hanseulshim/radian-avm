/* eslint-disable */
const json = require('./pages.json')

module.exports.server = async () => {
	const num = Math.round(Math.random())
	const jsonCopy = JSON.parse(JSON.stringify(json))
	if (num === 1) {
		jsonCopy.subjectProperty.imagePath = null
	}
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true
		},
		body: JSON.stringify(jsonCopy, null, 2)
	}
}
