// const parseSeasonData = require('./parseSeasonData');
// // const parsePlayersPerSeasonAndClubData = require('./parsePlayersPerSeasonAndClubData');
// const {generateLinks} = require('./utils/generateLinks');
import {generateLinks} from './utils/generateLinks.js';
// const {fixLeagueKey} = require('./utils/fixLeagueKey');
// const {sortLeagueDataBySeason} = require('./utils/sortBySeason');
// const {fixSeasonKeyLabel, transformTableData} = require('./utils/transformer');
import {LEAGUES, TRANSFERS} from './constants/index.js';
// const {parsePlayersPerSeasonAndClubData} = require('./parsePlayerPerSeasonAndClubData');
// const parseTransferData = require('./parseTransferData');
import {parseTransferData} from './parseTransferData.js';
import { promises as fs } from 'fs';

// const fs = require('fs').promises
const DATA_URL = '';


/** сохраняем в файл: */
const saveStats = async (fileIndex, data) => {
  // await fs.writeFile('./save/data.json', JSON.stringify(data))
  await fs.writeFile(`./save/club_transfers_${fileIndex}.json`, JSON.stringify(data))
}

const parsedData = [];
// const LEAGUE = 'La Liga 2';
const LEAGUE = 'Serbia Super Liga';

// /** parse seasonData from transfermarkt */
// generateLinks(LEAGUES.SERBIA)
//   .forEach(link => {

//     /** запускаем сам парсер */
//     parseSeasonData(link)
//       .then((res) => { // парсим данные
//           const table = transformTableData(res.table);

//           // console.log('BITCH', res.table);
//           // return res.table;
//           // /** добавляем ключ с обозначеним сезона */
//           const fixedData = fixSeasonKeyLabel(res.season, table, res.leaders);
//           // return fixedData;
//           parsedData.push(fixedData);
//           return parsedData;
//       })
//       /** меняем ключ названия сезона */
//       .then((parsedData) => {
//         const seasonData = fixLeagueKey(parsedData, LEAGUE);
//         return seasonData;
//       })
//     /** сортируем данные по сезону */
//       .then((seasonData) => {
//         const sortedBySeasonData = sortLeagueDataBySeason(seasonData);
//         return sortedBySeasonData;
//       })
//       .then((sortedBySeasonData) => {
//         const savedData = sortedBySeasonData;
//         saveStats(sortedBySeasonData);
//         return savedData;
//       })
//       .then((savedData) => {
//         console.log('SAVED DATA >>>', savedData)

//       })
// })


// парсит кривовато. где-то нормально,
// а где-то как в анекдоте:
// - мальчик, ты торомоз?
// - космонавтом!
// parsePlayersPerSeasonAndClubData()
//   .then((responseData) => {
//     saveStats(responseData);
//   });



generateLinks(TRANSFERS.BOSNIA_2_2)
  .forEach((link, index) => {
    console.log('link', link);
    const filename = `BOSNIA_2_2-${link.split('=')[1]}`;
    parseTransferData(link)
    .then((responseData) => {
      saveStats(filename, responseData);
    });
  })
  

const link = 'https://www.transfermarkt.world/super-liga-srbije/transfers/wettbewerb/SER1/plus/?saison_id=2004';

// parse Transfer data
// parseTransferData(link)
  // .then((responseData) => {
  //   saveStats(responseData);
  // });