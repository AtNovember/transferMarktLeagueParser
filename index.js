const parseSeasonData = require('./parser');
const {generateLinks} = require('./utils/generateLinks');
const {fixLeagueKey} = require('./utils/fixLeagueKey');
const {sortLeagueDataBySeason} = require('./utils/sortBySeason');
const {fixSeasonKeyLabel, transformTableData} = require('./utils/transformer');
const {LEAGUES} = require('./constants');
const fs = require('fs').promises
const DATA_URL = '';


/** сохраняем в файл: */
const saveStats = async (data) => {
  await fs.writeFile('./save/data.json', JSON.stringify(data))
}

const parsedData = [];
const LEAGUE = 'La Liga 2';

/** parse from transfermarkt */
generateLinks(LEAGUES.LA_LIGA_2)
  .forEach(link => {

    /** запускаем сам парсер */
    parseSeasonData(link)
      .then((res) => { // парсим данные
          const table = transformTableData(res.table);

          /** добавляем ключ с обозначеним сезона */
          const fixedData = fixSeasonKeyLabel(res.season, table, res.leaders);
          // return fixedData;
          parsedData.push(fixedData);
          return parsedData;
      })
      /** меняем ключ названия сезона */
      .then((parsedData) => {
        const seasonData = fixLeagueKey(parsedData, LEAGUE);
        return seasonData;
      })
      /** сортируем данные по сезону */
      .then((seasonData) => {
        const sortedBySeasonData = sortLeagueDataBySeason(seasonData);
        return sortedBySeasonData;
      })
      .then((sortedBySeasonData) => {
        const savedData = sortedBySeasonData;
        saveStats(sortedBySeasonData);
        return savedData;
      })
      .then((savedData) => {
        console.log('SAVED DATA >>>', savedData)

      })

})

