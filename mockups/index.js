
const serieAFullSeasonData = [
  [
    '#',  '1',  '2',  '3',  '4',
    '5',  '6',  '7',  '8',  '9',
    '10', '11', '12', '13', '14',
    '15', '16', '17', '18'
  ],
  [
    'club', '', '', '',
    '',     '', '', '',
    '',     '', '', '',
    '',     '', '', '',
    '',     '', ''
  ],
  [
    'club', 'Ambrosiana',
    'Genova',    'Juventus',
    'Torino',    'Bologna',
    'Napoli',    'Alessandria',
    'AS Roma',   'Pro Vercelli',
    'Brescia',   'Milan',
    'Modena',    'Pro Patria',
    'Livorno',   'Lazio',
    'Triestina', 'Padova',
    'Cremonese'
  ],
  [
    'Matches', '34', '34',
    '34',      '34', '34',
    '34',      '34', '34',
    '34',      '34', '34',
    '34',      '34', '34',
    '34',      '34', '34',
    '34'
  ],
  [
    'W',  '22', '20', '16',
    '16', '14', '14', '14',
    '15', '12', '13', '11',
    '11', '12', '12', '10',
    '11', '11', '4'
  ],
  [
    'D',  '6',  '8', '10', '7',
    '10', '9',  '8', '6',  '9',
    '7',  '10', '9', '6',  '5',
    '8',  '6',  '4', '8'
  ],
  [
    'L',  '6',  '6',  '8',
    '11', '10', '11', '12',
    '13', '13', '14', '13',
    '14', '16', '17', '16',
    '17', '19', '22'
  ],
  [
    'Goals', '85:38', '63:39',
    '50:29', '52:31', '56:43',
    '59:49', '55:49', '73:52',
    '52:60', '45:56', '52:48',
    '48:54', '46:64', '51:79',
    '49:50', '42:59', '52:78',
    '31:83'
  ],
  [
    '+/-', '47',  '24',  '21',
    '21',  '13',  '10',  '6',
    '21',  '-8',  '-11', '4',
    '-6',  '-18', '-28', '-1',
    '-17', '-26', '-52'
  ],
  [
    'Pts',   '50:18', '48:20',
    '42:26', '39:29', '38:30',
    '37:31', '36:32', '36:32',
    '33:35', '33:35', '32:36',
    '31:37', '30:38', '29:39',
    '28:40', '28:40', '26:42',
    '16:52'
  ]
];

const SerieAFullSeasonTransformedData = [
  {
    "#": '1',
    'club': "Ambrosiana",
    "Matches": '34',
    "W": '22',
    "D": '6',
    "L": '6',
    "Goals": "85:38",
    "+/-": "47",
    "Pts": "50:18",
  },
  {
    "#": '2',
    'club': "Genova",
    "Matches": '34',
    "W": "20",
    "D": '8',
    "L": "6",
    "Goals": "63:39",
    "+/-": "24",
    "Pts": "48:20",
  },
  {
    "#": '3',
    'club': "Juventus",
    "Matches": '34',
    "W": "16",
    "D": '10',
    "L": '8',
    "Goals": "50:29",
    "+/-": "21",
    "Pts": "42:26",
  },
  {
    "#": '4',
    'club': "Torino",
    "Matches": '34',
    "W": "16",
    "D": '7',
    "L": '11',
    "Goals": "52:31",
    "+/-": "21",
    "Pts": "39:29",
  },
  {
    "#": '5',
    'club': "Bologna",
    "Matches": '34',
    "W": "14",
    "D": '10',
    "L": '10',
    "Goals": "56:43",
    "+/-": "13",
    "Pts": "38:30",
  },
  {
    "#": '6',
    'club': "Napoli",
    "Matches": '34',
    "W": "14",
    "D": '9',
    "L": '11',
    "Goals": "59:49",
    "+/-": "10",
    "Pts": "37:31",
  },
  {
    "#": '7',
    'club': "Alessandria",
    "Matches": '34',
    "W": "14",
    "D": '8',
    "L": '12',
    "Goals": "55:49",
    "+/-": "6",
    "Pts": "36:32",
  },
  {
    "#": '8',
    'club': "AS Roma",
    "Matches": '34',
    "W": "15",
    "D": '6',
    "L": '13',
    "Goals":  "73:52",
    "+/-": "21",
    "Pts": "36:32",
  },
  {
    "#": '9',
    'club': "Pro Vercelli",
    "Matches": '34',
    "W": "12",
    "D": '9',
    "L": "13",
    "Goals": "52:60",
    "+/-": "-8",
    "Pts": "33:35",
  },
  {
    "#": '10',
    'club': "Brescia",
    "Matches": '34',
    "W": "13",
    "D": '7',
    "L": '14',
    "Goals": "45:56",
    "+/-": "-11",
    "Pts": "33:35",
  },
  {
    "#": '11',
    'club': "Milan",
    "Matches": '34',
    "W": "11",
    "D": '10',
    "L": '13',
    "Goals": "52:48",
    "+/-": "4",
    "Pts": "32:36",
  },
  {
    "#": '12',
    'club': "Modena",
    "Matches": '34',
    "W": "11",
    "D": '9',
    "L": '14',
    "Goals": "48:54",
    "+/-": "-6",
    "Pts": "31:37",
  },
  {
    "#": '13',
    'club': 'Pro Patria',
    "Matches": '34',
    "W": "12",
    "D": '6',
    "L": '16',
    "Goals": "46:64",
    "+/-": "-18",
    "Pts": "30:38",
  },
  {
    "#": '14',
    'club': 'Livorno',
    "Matches": '34',
    "W": "12",
    "D": '5',
    "L": '17',
    "Goals": "51:79",
    "+/-": "-28",
    "Pts": "29:39",
  },
  {
    "#": '15',
    'club': 'Lazio',
    "Matches": '34',
    "W": "10",
    "D": '8',
    "L": '16',
    "Goals": "49:50",
    "+/-": "-1",
    "Pts": "28:40",
  },
  {
    "#": '16',
    'club': 'Triestina',
    "Matches": '34',
    "W": "11",
    "D": '6',
    "L": '17',
    "Goals": "42:59",
    "+/-": "-17",
    "Pts": "28:40",
  },
  {
    "#": '17',
    'club': "Padova",
    "Matches": '34',
    "W": "11",
    "D": '4',
    "L": '19',
    "Goals": "52:78",
    "+/-": "-26",
    "Pts": "26:42",
  },
  {
    "#": '18',
    'club': "Cremonese",
    "Matches": '34',
    "W": "4",
    "D": '8',
    "L": '22',
    "Goals": "31:83",
    "+/-": "-52",
    "Pts": "16:52",
  }
];

const sourceShortLaLigaData = [
  [
    "#",
    "1",
    "2",
    "3",
  ],
  [
    "club",
    "",
    "",
    "",
  ],
  [
    "club",
    "Athletic",
    "Barcelona",
    "Arenas Club",
  ],
  [
    "Matches",
    "18",
    "18",
    "18",
  ],
  [
    "W",
    "12",
    "11",
    "9",
  ],
  [
    "D",
    "6",
    "1",
    "2",
  ],
  [
    "L",
    "0",
    "6",
    "7",
  ],
  [
    "Goals",
    "63:28",
    "46:36",
    "51:40",
  ],
  [
    "+/-",
    "35",
    "10",
    "11",
  ],
  [
    "Pts",
    "30:6",
    "23:13",
    "20:16",
  ]
];

const transformedShortLaLIgaData = [{
  "#": '1',
  'club': "Athletic",
  "Matches": '18',
  "W": '12',
  "D": '6',
  "L": '0',
  "Goals": "63:28",
  "+/-": "35",
  "Pts": "30:6",
},
  {
    "#": '2',
    'club': "Barcelona",
    "Matches": '18',
    "W": "11",
    "D": '1',
    "L": "6",
    "Goals": "46:36",
    "+/-": "10",
    "Pts": "23:13",
  },
  {
    "#": '3',
    'club': "Arenas Club",
    "Matches": '18',
    "W": "9",
    "D": '2',
    "L": '7',
    "Goals": "51:40",
    "+/-": "11",
    "Pts": "20:16",
  }
]

const seasonKeySourceData =  [
  { 'Table Serie A 1929/30 ': { table: [], leaders: [] } },
  { 'Table Serie A 30/31 ': { table: [], leaders: [] } },
  { 'Table Serie A 31/32 ': { table: [], leaders: [] } },
  { 'TABLE SERIE A 19/20 ': { table: [], leaders: [] } },
  { 'TABLE SERIE A 00/01 ': { table: [], leaders: [] } },
]


const seasonKeyYearData = [
  { '1929/30': { table: [], leaders: [], league: 'Serie A' } },
  { '1930/31': { table: [], leaders: [], league: 'Serie A' } },
  { '1931/32': { table: [], leaders: [], league: 'Serie A' } },
  { '2019/20': { table: [], leaders: [], league: 'Serie A' } },
  { '2000/01': { table: [], leaders: [], league: 'Serie A' } },
]

module.exports = {
  SerieAFullSeasonTransformedData,
  serieAFullSeasonData,
  sourceShortLaLigaData,
  transformedShortLaLIgaData,

  seasonKeySourceData,
  seasonKeyYearData
};