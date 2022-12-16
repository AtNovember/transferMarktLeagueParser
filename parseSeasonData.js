const axios = require("axios");
const cheerio = require("cheerio");
const cheerioTableparser = require('cheerio-tableparser');

const link = 'https://www.transfermarkt.world/super-liga-srbije/startseite/wettbewerb/SER1';

async function parseSeasonData(sourceLink = link) {

  const responseData = await axios
    .get(sourceLink)
    .then((response) => {
      const $ = cheerio.load(response.data);
      cheerioTableparser($);

      // const season = $('.large-8.columns .box .table-header').eq(1).text() // заголовок
      const season = $('.content-box-headline').eq(0).text() // заголовок
      // const table = $('.responsive-table').parsetable(true, true, true); // la liga 1
      // const table = $('.large-8.columns div.box:nth-child(2) table').parsetable(true, true, true); // la liga 2
      const table = $('table.items').parsetable(true, true, true); // la liga 2
      const leaders = $('table').eq(4).parsetable(true, true, true); // список лучших

      console.log('TABLE', table);

      return {
        season: season,
        table: table,
        leaders: leaders
        // leaders: []
      }
    })
    .catch((err) => console.log("Fetch error " + err));

  return responseData;
}

module.exports = parseSeasonData;
