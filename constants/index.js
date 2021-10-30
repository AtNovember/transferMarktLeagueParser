// todo: сделать словарик:

// premier league 1992-2021
// https://www.transfermarkt.com/premier-league/tabelle/wettbewerb/GB1/saison_id/1992 - готово

// english league 1957-1992
// 'https://www.transfermarkt.com/first-division-bis-91-92-/tabelle/wettbewerb/EFD1/saison_id/1957' - готово

// eng championship 2004-2021
// https://www.transfermarkt.com/championship/tabelle/wettbewerb/GB2/saison_id/2004 - готово

// eng championship 1998 - 2004
// 'https://www.transfermarkt.com/first-division-until-03-04-/startseite/wettbewerb/EFD2/plus/?saison_id=1997' - готово



const CURRENT_YEAR = 2022;

const LEAGUES = {
  SERIE_A: {
    link: 'https://www.transfermarkt.com/serie-a/tabelle/wettbewerb/IT1/saison_id/',
    firstSeason: 1929,
    lastSeason: CURRENT_YEAR,
  },
  SERIE_B: {
    link: 'https://www.transfermarkt.com/serie-a/tabelle/wettbewerb/IT2/saison_id/',
    firstSeason: 1929,
    lastSeason: CURRENT_YEAR,
  },
  LA_LIGA_1: {
    link: 'https://www.transfermarkt.com/laliga/tabelle/wettbewerb/ES1/saison_id/',
    firstSeason: 1929,
    lastSeason: CURRENT_YEAR,
  },
  /** для 2 дивизиона испании: // для сегунды глюки до 1940 года, до этого данные некорректные (( */
  LA_LIGA_2: {
    link: 'https://www.transfermarkt.com/laliga/tabelle/wettbewerb/ES2/saison_id/',
    firstSeason: 1940,
    lastSeason: CURRENT_YEAR,
  }
}


/// PLAYERS BY SEASON!!
// https://www.transfermarkt.ru/ac-mailand/startseite/verein/5/saison_id/1930

// PLAYERS WITH PRICE BY SEASON!! first season with price data (milan id 5)
// https://www.transfermarkt.ru/milan/kader/verein/5/plus/1/galerie/0?saison_id=2004

// PLAYERS WITH PRICE LA LIGA BY SEASON!! first season with price data (id 131)
// https://www.transfermarkt.ru/barcelona/kader/verein/131/plus/1/galerie/0?saison_id=2004
// https://www.transfermarkt.ru/%D0%A4%D0%9A-%D0%91%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0/kader/verein/131/plus/1/galerie/0?saison_id=2004

module.exports = {LEAGUES};