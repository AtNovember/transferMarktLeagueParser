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

export const LEAGUES = {
  // SERIE_A: {
  //   link: 'https://www.transfermarkt.com/serie-a/tabelle/wettbewerb/IT1/saison_id/',
  //   firstSeason: 1929,
  //   lastSeason: CURRENT_YEAR,
  // },
  // SERIE_B: {
  //   link: 'https://www.transfermarkt.com/serie-a/tabelle/wettbewerb/IT2/saison_id/',
  //   firstSeason: 1929,
  //   lastSeason: CURRENT_YEAR,
  // },
  // LA_LIGA_1: {
  //   link: 'https://www.transfermarkt.com/laliga/tabelle/wettbewerb/ES1/saison_id/',
  //   firstSeason: 1929,
  //   lastSeason: CURRENT_YEAR,
  // },
  // /** для 2 дивизиона испании: // для сегунды глюки до 1940 года, до этого данные некорректные (( */
  // LA_LIGA_2: {
  //   link: 'https://www.transfermarkt.com/laliga/tabelle/wettbewerb/ES2/saison_id/',
  //   firstSeason: 1940,
  //   lastSeason: CURRENT_YEAR,
  // },
  SERBIA: {
    link: 'https://www.transfermarkt.com/serbia-super-liga/tabelle/wettbewerb/SER1/saison_id/',
    firstSeason: 2004,
    lastSeason: 2021
  }
}


/// PLAYERS BY SEASON!!
// https://www.transfermarkt.ru/ac-mailand/startseite/verein/5/saison_id/1930

// PLAYERS WITH PRICE BY SEASON!! first season with price data (milan id 5)
// https://www.transfermarkt.ru/milan/kader/verein/5/plus/1/galerie/0?saison_id=2004

// PLAYERS WITH PRICE LA LIGA BY SEASON!! first season with price data (id 131)
// https://www.transfermarkt.ru/barcelona/kader/verein/131/plus/1/galerie/0?saison_id=2004
// https://www.transfermarkt.ru/%D0%A4%D0%9A-%D0%91%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0/kader/verein/131/plus/1/galerie/0?saison_id=2004


// Стоимость клубов по сезонам
// https://www.transfermarkt.world/%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%9B%D0%B8%D0%B3%D0%B0/marktwerteverein/wettbewerb/SER1/plus/1?stichtag=2010-11-01

// Трансферы
// https://www.transfermarkt.world/%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%9B%D0%B8%D0%B3%D0%B0/transfers/wettbewerb/SER1/plus/?saison_id=2006&s_w=&leihe=1&intern=0&intern=1
// https://www.transfermarkt.world/Superliga/transfers/wettbewerb/SER1/plus/?saison_id=2004&s_w=&leihe=1&intern=0&intern=1

export const TRANSFERS = {
  SERBIA: {
    link: 'https://www.transfermarkt.world/Superliga/transfers/wettbewerb/SER1/plus/?saison_id=',
    firstSeason: 2004,
    lastSeason: 2024,
  },
  SERBIA_2: {
    link: 'https://www.transfermarkt.world/Superliga/transfers/wettbewerb/SER2/plus/?saison_id=',
    firstSeason: 2004,
    // firstSeason: 2008,
    // lastSeason: 2024,
    lastSeason: 2023
  },
  RUSSIA: {
    link: 'https://www.transfermarkt.world/Superliga/transfers/wettbewerb/ru1/plus/?saison_id=',
    firstSeason: 1991,
    lastSeason: 2024,
  },
  RUSSIA_2: {
    link: 'https://www.transfermarkt.world/Superliga/transfers/wettbewerb/ru2/plus/?saison_id=',
    firstSeason: 1991,
    lastSeason: 2024,
  },
  EPL: {
    link: 'https://www.transfermarkt.world/epl/transfers/wettbewerb/GB1/plus/?saison_id=',
    firstSeason: 1992,
    lastSeason: 2024,
  },
  EPL_2: {
    link: 'https://www.transfermarkt.world/championship/transfers/wettbewerb/GB2/plus/?saison_id=',
    firstSeason: 2004,
    lastSeason: 2024,
  },
  EPL_3: {
    link: 'https://www.transfermarkt.world/liga1/transfers/wettbewerb/GB3/plus/?saison_id=',
    firstSeason: 2004,
    lastSeason: 2024,
  },
  ESP_1: {
    link: 'https://www.transfermarkt.world/laliga/transfers/wettbewerb/ES1/plus/?saison_id=',
    firstSeason: 1928,
    lastSeason: 2024,
  },
  ESP_2: {
    link: 'https://www.transfermarkt.world/laliga/transfers/wettbewerb/ES2/plus/?saison_id=',
    firstSeason: 1928,
    lastSeason: 2024,
  },
  ITALIA: {
    link: 'https://www.transfermarkt.world/serie-a/transfers/wettbewerb/IT1/plus/?saison_id=',
    firstSeason: 1929,
    lastSeason: 2024,
  },
  ITALIA_2: {
    link: 'https://www.transfermarkt.world/serie-b/transfers/wettbewerb/IT2/plus/?saison_id=',
    firstSeason: 1929,
    lastSeason: 2024,
  },
  GERMANY: {
    link: 'https://www.transfermarkt.world/bundesliga/transfers/wettbewerb/L1/plus/?saison_id=',
    firstSeason: 1965,
    lastSeason: 2024,
  },
  GERMANY_2: {
    link: 'https://www.transfermarkt.world/2-%D0%91%D1%83%D0%BD%D0%B4%D0%B5%D1%81%D0%BB%D0%B8%D0%B3%D0%B0/transfers/wettbewerb/L2/plus/?saison_id=',
    firstSeason: 1981,
    lastSeason: 2024,
  },
  GERMANY_3: {
    link: 'https://www.transfermarkt.world/%D0%A2%D1%80%D0%B5%D1%82%D1%8C%D1%8F-%D0%9B%D0%B8%D0%B3%D0%B0/transfers/wettbewerb/L3/plus/?saison_id=',
        firstSeason: 2008,
    lastSeason: 2024,
  },
  MACEDONIA: {
    link: 'https://www.transfermarkt.world/macedonia-liga/transfers/wettbewerb/MAZ1/plus/?saison_id=',
        firstSeason: 2010,
    lastSeason: 2024,
  },
  PORTUGAL: {
    link: 'https://www.transfermarkt.world/liga-betclic/transfers/wettbewerb/PO1/plus/?saison_id=',
        firstSeason: 1990,
    lastSeason: 2024,
  },
  PORTUGAL_2: {
    link: 'https://www.transfermarkt.world/portugal-2/transfers/wettbewerb/PO2/plus/?saison_id=',
        firstSeason: 2003,
    lastSeason: 2024,
  },
  PORTUGAL_3: {
    link: 'https://www.transfermarkt.world/liga-3/transfers/wettbewerb/PT3A/plus/?saison_id=', // only 1 season
    firstSeason: 2022,
    lastSeason: 2024
  },
  BRAZIL: {
    link: 'https://www.transfermarkt.world/BRA/transfers/wettbewerb/BRA1/plus/?saison_id=',
        firstSeason: 1995,
    lastSeason: 2024,
  },
  BRAZIL_2: {
    link: 'https://www.transfermarkt.world/BRA2/transfers/wettbewerb/BRA2/plus/?saison_id=',
        firstSeason: 2007,
    lastSeason: 2024,
  },
  GREECE: {
    link: 'https://www.transfermarkt.world/superliga-1/transfers/wettbewerb/GR1/plus/?saison_id=',
        firstSeason: 1959,
    lastSeason: 2024,
  },
  GREECE_2: {
    link: 'https://www.transfermarkt.world/akakisi/transfers/wettbewerb/GR2/plus/?saison_id=',
        firstSeason: 1992,
    lastSeason: 2024,
  },
  CROATIA: {
    link: 'https://www.transfermarkt.world/xxxx/transfers/wettbewerb/KR1/plus/?saison_id=',
        firstSeason: 2005,
    lastSeason: 2024,
  },
  CROATIA_2: {
    link: 'https://www.transfermarkt.world/prva-nogometna-liga/transfers/wettbewerb/KR2/plus/?saison_id=',
        firstSeason: 2006,
    lastSeason: 2024,
  },
  MOLDOVA: {
    link: 'https://www.transfermarkt.world/xxx/transfers/wettbewerb/MO1N/plus/?saison_id=',
        firstSeason: 2017,
    lastSeason: 2024,
  },
  ROMONIA: {
    link: 'https://www.transfermarkt.world/xxx/transfers/wettbewerb/RO1/plus/?saison_id=',
        firstSeason: 2003,
    lastSeason: 2024,
  },
  ROMONIA_2: {
    link: 'https://www.transfermarkt.world/xxx/transfers/wettbewerb/RO2/plus/?saison_id=',
        firstSeason: 2009,
    lastSeason: 2024,
  },
  BULGARIA: {
    link: 'https://www.transfermarkt.world/xxx/transfers/wettbewerb/BU1/plus/?saison_id=',
        firstSeason: 2000,
    lastSeason: 2024,
  },
  BULGARIA_2: {
    link: 'https://www.transfermarkt.world/xxx/transfers/wettbewerb/BU2/plus/?saison_id=',
        firstSeason: 2009,
    lastSeason: 2024,
  },
  ALBANIA: {
    link: 'https://www.transfermarkt.world/alba/transfers/wettbewerb/ALB1/plus/?saison_id=',
        firstSeason: 2007,
    lastSeason: 2024,
  },
  ALBANIA_2: {
    link: 'https://www.transfermarkt.world/kategoria-e-pare/transfers/wettbewerb/ALB2/plus/?saison_id=',
        firstSeason: 2019,
    lastSeason: 2024,
  },
  CRNAGORA: {
    link: 'https://www.transfermarkt.world/mne/transfers/wettbewerb/MNE1/plus/?saison_id=',
        firstSeason: 2008,
    lastSeason: 2024,
  },
  CRNAGORA_2: {
    link: 'https://www.transfermarkt.world/2-cfl/transfers/wettbewerb/MNE2/plus/?saison_id=',
        firstSeason: 2017,
    lastSeason: 2024,
  },
  BOSNIA: {
    link: 'https://www.transfermarkt.world/bosnia/transfers/wettbewerb/BOS1/plus/?saison_id=',
        firstSeason: 2002,
    lastSeason: 2024,
  },
  BOSNIA_2: {
    link: 'https://www.transfermarkt.world/Bosnia-2/transfers/wettbewerb/BOS2/plus/?saison_id=',
        firstSeason: 2008,
    lastSeason: 2024,
  },
  BOSNIA_2_2: {
    link: 'https://www.transfermarkt.world/BOSNIA-2-2/transfers/wettbewerb/BH2S/plus/?saison_id=',
        firstSeason: 2008,
    lastSeason: 2024,
  },
  EPL_before_1991: {
    link: 'https://www.transfermarkt.world/EPL-before-91-92-/transfers/wettbewerb/EFD1/plus/?saison_id=',
    firstSeason: 1949,
    lastSeason: 1991,
  },
  EPL_2_before_2004: {
    link: 'https://www.transfermarkt.world/second-division-03-04-/transfers/wettbewerb/ENSD/plus/?saison_id=',
    firstSeason: 1969,
    lastSeason: 2003
  }


}



// module.exports = {LEAGUES, TRANSFERS};