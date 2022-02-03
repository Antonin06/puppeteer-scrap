const puppeteer = require("puppeteer");

const url = "https://www.ceran.com/fr-fr/avis-temoignages-clients";


(async () => {
	const browser = await puppeteer.launch({ headless: false, defaultViewport: {width:1200,height:800} });
	const page = await browser.newPage();
	await page.goto(url, { waitUntil: "networkidle2" });

	// const link = await page.waitForSelector(".Content a", { visible: true });
	// console.log(link)
	// await page.click(".mt3GC > button");
	//
	// await page.goto(url2, { waitUntil: "networkidle2" });
	//
	const content = await page.evaluate(() => {
		let data = [];

		let videos = document.querySelectorAll(".Content");
		console.log(videos)
		videos.forEach((video) => {
			let linksInDiv = video.querySelectorAll('a');
			let h2s = video.querySelectorAll('h2');
			let h3s = video.querySelectorAll('h3');

			linksInDiv.forEach((link) => {
				let href = link.href;
				console.log(href.length)
				data.push({
					href
				});
			});

			h2s.forEach((h2) => {
				let h2_title = h2.innerText;
				console.log(h2_title)
				data.push({
					h2_title
				});
			});
			h3s.forEach((h3) => {
				let h3_title = h3.innerText;
				console.log(h3_title)
				data.push({
					h3_title
				});
			})
			// let href = video.querySelector("a[href]").href;
			// let titleh2 = video.querySelector("h2")?.innerText
			// let titleh3 = video.querySelector("h3")?.innerText
			// data.push({
			// 	href,
			// 	titleh2,
			// 	titleh3
			// });
		});
		return data;
	});
	console.log(content);
	console.log(content.length);
	// const jsonData = JSON.stringify(content);

	// debugger;
	// await browser.close();
})();
