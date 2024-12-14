const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.vistaprint.in/';

axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const data = [];
        $('div').each((index, element) => {
            const item = $(element).text();
            data.push(item);
        });
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// (async () => {
//     const res = await axios.get(url)
//     const html = res.data;
//     const $ = cheerio.load(html);
//     const data = [];
//     $('selector').each((index, element) => {
//         const item = $(element).text();
//         data.push(item);
//     });
//     console.log(data);
    
// }

// )();
// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://example.com', { waitUntil: 'networkidle2' });
//     const content = await page.content();
//     const $ = cheerio.load(content);
//     const data = [];
//     $('selector').each((index, element) => {
//     const item = $(element).text();
//     data.push(item);
//     });
//     console.log(data);
//     await browser.close();
//     })();