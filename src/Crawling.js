//https://www.youtube.com/watch?v=yaeZ17QYxVs 크롤링 코드 참고
//npm install axios
//npm install cheerio
//npm install iconv
//국민대 생협은 euc-kr 이라서 utf-8로 바꾸어주어야 했음 ㅜㅜ
//https://velog.io/@_nine/Node.js-Crawling-feat.-Cheerio utf로 바꾸는 방법 참고
const axios = require("axios");
const cheerio = require("cheerio");
const Iconv = require('iconv').Iconv;
const iconv = new Iconv('EUC-KR', 'UTF-8');

const getHtml = async (keyword) => {
  try {
    const response = await axios.get(`https://kmucoop.kookmin.ac.kr/restaurant/restaurant.php?mkey=3&w=${keyword}`, { responseType: 'arraybuffer' });
    const htmlBuffer = iconv.convert(response.data);
    const htmlString = htmlBuffer.toString(); // Convert the buffer to a string
    return htmlString;
  } catch (error) {
    console.error(error);
  }
};

const keyword = "2"; // Replace this with the actual keyword

getHtml(keyword)
  .then((html) => {
    const $ = cheerio.load(html); // Load the HTML string
    const data = $('body > div.wrap > div > div.dv1 > div.smid > div.detail > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td');
    const dataText = data.text();
    return dataText;
  })
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
