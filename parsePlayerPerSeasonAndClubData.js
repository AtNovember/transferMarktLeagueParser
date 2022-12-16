// для жесткой затравки:
// https://www.transfermarkt.ru/real-madrid/startseite/verein/418/saison_id/2021

const axios = require("axios");
const cheerio = require("cheerio");
const cheerioTableparser = require('cheerio-tableparser');

async function parsePlayersPerSeasonAndClubData(sourceLink = 'https://www.transfermarkt.ru/real-madrid/kader/verein/418/saison_id/2021/plus/1') {

  const responseData = await axios
    .get(sourceLink)
    .then((response) => {
      const $ = cheerio.load(response.data);
      cheerioTableparser($);

      const table = $('table.items').parsetable(true, true, true); // la liga 1

      console.log('parsedPlayers >>>', table);
      return table;
    })
    .catch((err) => console.log("Fetch error " + err));

  return responseData;
}

module.exports = {parsePlayersPerSeasonAndClubData};