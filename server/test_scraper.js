const axios = require('axios');
const cheerio = require('cheerio');

async function testScrape() {
  const topic = "Two Pointers";
  const query = `site:geeksforgeeks.org OR site:leetcode.com OR site:developer.mozilla.org "${topic}"`;
  const searchUrl = `https://lite.duckduckgo.com/lite/`;

  try {
    const response = await axios.post(searchUrl, `q=${encodeURIComponent(query)}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Origin': 'https://lite.duckduckgo.com',
        'Referer': 'https://lite.duckduckgo.com/lite/'
      }
    });
    
    console.log("Response Status:", response.status);

    const $ = cheerio.load(response.data);
    const links = [];

    $('tr').each((i, el) => {
      const titleEl = $(el).find('.result-snippet');
      if(titleEl.length > 0) {
        // usually in lite version, title is in previous TR
        const prevTr = $(el).prev('tr');
        const aTag = prevTr.find('.result-link');
        const title = aTag.text().trim();
        let rawUrl = aTag.attr('href');
        
        if (rawUrl && rawUrl.startsWith('//lite.duckduckgo.com/l/?uddg=')) {
          rawUrl = decodeURIComponent(rawUrl.split('uddg=')[1].split('&')[0]);
        }
        if (title && rawUrl) {
          links.push({ title, url: rawUrl });
        }
      }
    });

    console.log("Found links:", links);
    
    if (links.length === 0) {
      console.log("No links found, HTML might have changed. Snippet:");
      console.log(response.data.substring(0, 1000));
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

testScrape();
