const puppeteer = require("puppeteer");

const url = "https://www.ceran.com/fr-fr/ecole-de-langues/emplois";


(async () => {
	const browser = await puppeteer.launch({ headless: false, defaultViewport: {width:1200,height:800} });
	const page = await browser.newPage();
	await page.goto(url, { waitUntil: "networkidle2" });


	const content = await page.evaluate(() => {
		let data = [];

		let jobs = document.querySelectorAll(".panel-group .panel");
		jobs.forEach((job) => {
			let titre = job.querySelector(".panel-title").innerText;
			let content = job.querySelector(".panel-body")?.textContent

			data.push({
				titre,
				content
			});
		});
		return data;
	});
	console.log(content);
	console.log(content.length);
	// const jsonData = JSON.stringify(content);

	debugger;
	await browser.close();
})();
