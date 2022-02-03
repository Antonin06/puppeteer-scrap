const puppeteer = require("puppeteer");

const url = "https://instagram.com";


(async () => {
	const browser = await puppeteer.launch({ headless: false, defaultViewport: {width:1200,height:800} });
	const page = await browser.newPage();
	await page.goto(url, { waitUntil: "networkidle2" });

	// // cookie
	// await page.waitForSelector("._1XyCr .bIiDR", { visible: true });
	// await page.click("._1XyCr .bIiDR");
	//
	// // login
	// await page.type("[name=username]", process.env.INSTA_TEL, { delay: 100 });
	// await page.type("[name=password]", process.env.INSTA_PASS, { delay: 100 });
	//
	// await page.click("button[type=submit]");
	//
	// // auto connect
	// await page.waitForSelector(".cmbtv > button", { visible: true });
	// await page.click(".cmbtv > button");
	//
	// // notif
	// await page.waitForSelector(".mt3GC > button", { visible: true });
	// await page.click(".mt3GC > button");
	//
	// await page.goto(url2, { waitUntil: "networkidle2" });
	//
	// const images = await page.evaluate(() => {
	// 	let images = [];
	// 	let elements = document.querySelectorAll('.KL4Bh');
	// 	for (element of elements) {
	// 		images.push({
	// 			img: element.querySelector('img.FFVAD')?.src,
	// 		})
	// 	}
	// 	return images;
	// });
	// console.log(images.length)
	// debugger;
	// await browser.close();
})();
