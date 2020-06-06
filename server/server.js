/* eslint-disable */
const puppeteer = require('puppeteer')

const server = async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.setViewport({ width: 1440, height: 768 })
	await page.goto(
		// 'https://s3.amazonaws.com/dev.boostlabs/radian-avm/index.html',
		'http://localhost:3000/',
		{ waitUntil: 'networkidle2' }
	)
	const pdfConfig = {
		path: 'AVM.pdf',
		format: 'Letter',
		printBackground: true,
		scale: 0.58,
		margin: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		}
	}
	await page.pdf(pdfConfig)

	await browser.close()
}

server()
