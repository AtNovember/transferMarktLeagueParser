// const axios = require("axios");
import axios from 'axios';
// const cheerio = require("cheerio");
// const cheerioTableparser = require('cheerio-tableparser');
// import JSDOM from 'jsdom';
import jsdom from 'jsdom';
const {JSDOM} = jsdom;
// const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
// global.document = document;
// global.window = document.defaultView;
// const JSDOM = require('jsdom');

// const link = 'https://www.transfermarkt.world/super-liga-srbije/transfers/wettbewerb/SER1';
// const link = 'https://www.transfermarkt.world/super-liga-srbije/transfers/wettbewerb/SER1/plus/?saison_id=2004';

export async function parseTransferData(sourceLink = link) {

  const responseData = await axios
    .get(sourceLink)
    .then((response) => {
      const { data, status } = response;
      const {document} = (new JSDOM(data)).window;

      // вытаскиваем заголовок с названием сезона
      const season = document.querySelector('h1.content-box-headline');


      
      console.log('season', season.innerHTML.trim())
      const boxes = [...document.querySelectorAll('.box')];


      boxes.map((node, index) => {
        // if (index > 2) { // lets take partizan only

          const clubHeadLine = node.querySelector('.content-box-headline.content-box-headline--inverted.content-box-headline--logo');
          const clubname = clubHeadLine ? clubHeadLine.textContent.trim() : null;
          console.log(clubname);
  
          // ПРИШЛИ/ВЕРНУЛИСЬ В КЛУБ
          const tableFirst = node.querySelectorAll('.responsive-table')[0] || null;

          if (tableFirst) {
            [...tableFirst.querySelectorAll('tbody > tr')].map((tr, index) => {
              const name = tr.querySelector('td span.hide-for-small > a').innerHTML;
              const age = tr.querySelector('td.zentriert.alter-transfer-cell').innerHTML;
              const nationality_1 = tr.querySelector('td.zentriert.nat-transfer-cell > img').getAttribute('title');
              const nationality_2 = tr.querySelector('td.zentriert.nat-transfer-cell > img:last-child')?.getAttribute('title')
              const position = tr.querySelector('td.pos-transfer-cell').innerHTML;
              const fee = tr.querySelector('td.rechts.mw-transfer-cell').innerHTML;
              const fromClub = tr.querySelector('td.no-border-rechts.zentriert > img')?.getAttribute('title') || 'No Name';
              const fromCountry = tr.querySelector('td.no-border-links.verein-flagge-transfer-cell > img')?.getAttribute('title') || null;
              const sumOrReason = tr.querySelector('td.rechts:not(.mw-transfer-cell) > a').innerHTML || '-'
  
              console.log('Transfer ins >>>', name, age, nationality_1, nationality_2, position, fee, fromClub, fromCountry, sumOrReason);
            });
          }
          


          //  УШЛИ ИЗ КЛУБА
          const tableSecond = node.querySelectorAll('.responsive-table')[1] || null;
          if (tableSecond) {
            [...tableSecond.querySelectorAll('tbody > tr')].map((tr, index) => {
              const name = tr.querySelector('td span.hide-for-small > a').innerHTML;
              const age = tr.querySelector('td.zentriert.alter-transfer-cell').innerHTML;
              const nationality_1 = tr.querySelector('td.zentriert.nat-transfer-cell > img').getAttribute('title');
              const nationality_2 = tr.querySelector('td.zentriert.nat-transfer-cell > img:last-child')?.getAttribute('title');
              const position = tr.querySelector('td.pos-transfer-cell').innerHTML;
              const fee = tr.querySelector('td.rechts.mw-transfer-cell').innerHTML;
              const toClub = tr.querySelector('td.no-border-rechts.zentriert > img')?.getAttribute('title') || 'Завершил карьеру';
              const toCountry = tr.querySelector('td.no-border-links.verein-flagge-transfer-cell > img')?.getAttribute('title') || null;
              const sumOrReason = tr.querySelector('td.rechts:not(.mw-transfer-cell) > a').innerHTML || '-'
  
              console.log('Transfer outs >>>', name, age, 
              nationality_1,
              nationality_2, 
              position, fee, 
              toClub, 
              toCountry, 
              sumOrReason
              );
  
            })
          }
          

        // }


      });
      
    })
    .catch((err) => console.log("Fetch error " + err));

  return responseData;
}

// module.exports = parseTransferData;
