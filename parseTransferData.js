// const axios = require("axios");
import axios from 'axios';
// const cheerio = require("cheerio");
// const cheerioTableparser = require('cheerio-tableparser');
// import JSDOM from 'jsdom';
import jsdom from 'jsdom';
const {JSDOM} = jsdom;

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


      return boxes.map((node, index) => {
        // if (index > 2) { // lets take partizan only

          const clubHeadLine = node.querySelector('.content-box-headline.content-box-headline--inverted.content-box-headline--logo');
          const clubname = clubHeadLine ? clubHeadLine.textContent.trim() : null;
          const clubIn = [];
          const clubOutTotal = [];
          const clubOut = [];
          const clubInTotal = [];
          const clubTransferbalance = node.querySelector('.table-footer.footer-border > span')?.innerHTML || null;
          console.log('=================================');
          console.log('season', season.innerHTML.trim())
          console.log(clubname);

  
          // ПРИШЛИ/ВЕРНУЛИСЬ В КЛУБ
          const tableFirst = node.querySelectorAll('.responsive-table')[0] || null;

        

          if (tableFirst) {
            
            [...tableFirst.querySelectorAll('tbody > tr')].map((tr, index) => {

              
              const name = tr?.querySelector('td span.hide-for-small > a')?.innerHTML || 'name.in';
              const age = tr?.querySelector('td.zentriert.alter-transfer-cell')?.innerHTML || 'age.in';
              const nationality_1 = tr?.querySelector('td.zentriert.nat-transfer-cell > img')?.getAttribute('title') || 'k.A.';
              const nationality_2 = tr?.querySelector('td.zentriert.nat-transfer-cell > img:last-child')?.getAttribute('title') || 'k.A.';
              const position = tr?.querySelector('td.pos-transfer-cell')?.innerHTML || 'position.in';
              const fee = tr?.querySelector('td.rechts.mw-transfer-cell')?.innerHTML || 'fee.in';
              const fromClub = tr?.querySelector('td.no-border-rechts.zentriert > img')?.getAttribute('title') || 'No Name';
              const fromCountry = tr?.querySelector('td.no-border-links.verein-flagge-transfer-cell > img')?.getAttribute('title') || null;
              const sumOrReason = tr?.querySelector('td.rechts:not(.mw-transfer-cell) > a')?.innerHTML || '-';

              clubIn.push({name, age, nationality_1, nationality_2, position, fee, fromClub, fromCountry, sumOrReason});
  
              console.log('Transfer ins >>>', 
              name, age, nationality_1, nationality_2, position, fee, fromClub, fromCountry, sumOrReason);
            });
          }

          const clubInSummary = node.querySelectorAll('.box > .responsive-table > .transfer-zusatzinfo-box')[0] || null;
            // console.log('clubInSummary', clubInSummary)
            if (clubInSummary) {
              [...clubInSummary.querySelectorAll('span')].map((span) => {
                const title = span?.innerHTML?.split(':')[0]?.trim() || 'title';
                const value = span?.innerHTML?.split(':')[1]?.trim() || null;
  
                clubOutTotal.push({title, value})
                // console.log('span', span.innerHTML.trim());
              })
            }
         
          


          //  УШЛИ ИЗ КЛУБА
          const tableSecond = node.querySelectorAll('.responsive-table')[1] || null;
          if (tableSecond) {

            [...tableSecond.querySelectorAll('tbody > tr')].map((tr, index) => {
              const name = tr?.querySelector('td span.hide-for-small > a')?.innerHTML || 'name.out';
              const age = tr?.querySelector('td.zentriert.alter-transfer-cell')?.innerHTML || 'age.out';
              const nationality_1 = tr?.querySelector('td.zentriert.nat-transfer-cell > img')?.getAttribute('title') || 'k.A.';
              const nationality_2 = tr?.querySelector('td.zentriert.nat-transfer-cell > img:last-child')?.getAttribute('title') || 'k.A.';
              const position = tr?.querySelector('td.pos-transfer-cell')?.innerHTML || 'position.out';
              const fee = tr?.querySelector('td.rechts.mw-transfer-cell')?.innerHTML || 'fee.out';
              const toClub = tr?.querySelector('td.no-border-rechts.zentriert > img')?.getAttribute('title')
              || tr?.querySelector('td.no-border-rechts.zentriert > a')?.getAttribute('title') || 'Завершил карьеру';
              const toCountry = tr?.querySelector('td.no-border-links.verein-flagge-transfer-cell > img')?.getAttribute('title') || null;
              const sumOrReason = tr?.querySelector('td.rechts:not(.mw-transfer-cell) > a')?.innerHTML || '-';
  

              clubOut.push({
                name, age, 
              nationality_1,
              nationality_2, 
              position, fee, 
              toClub, 
              toCountry, 
              sumOrReason
              });
              console.log('Transfer outs >>>', 
              name, age, 
              nationality_1,
              nationality_2, 
              position, fee, 
              toClub, 
              toCountry, 
              sumOrReason
              );
  
            })
          }


          const clubOutSummary = node.querySelectorAll('.transfer-zusatzinfo-box')[0] || null;
            if (clubOutSummary) {
              [...clubOutSummary.querySelectorAll('span')].map((span) => {
                const title = span?.innerHTML?.split(':')[0]?.trim() || 'title';
                const value = span?.innerHTML?.split(':')[1]?.trim() || null;
  
                clubInTotal.push({title, value})
              })
      
            }
          
          console.log('clubInTotal', clubInTotal);
          console.log('clubOutTotal', clubOutTotal);
          console.log('clubTransferbalance', clubTransferbalance);

        return { clubname, clubIn, clubInTotal, clubOut, clubOutTotal };

      });
      
    })
    .catch((err) => console.log("Fetch error " + err));

  return responseData;
}
