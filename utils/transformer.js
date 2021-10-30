
/**
 * 2 шаг. трансформируем спарсенную табличку в вид:
 * @return [{
    "#": '1',
    'club': "Athletic",
    "Matches": '18',
    "W": '12',
    "D": '6',
    "L": '0',
    "Goals": "63:28",
    "+/-": "35",
    "Pts": "30:6",
  }]
 * */
function transformTableData(data) {
  const tableData = [...data];

  // delete empty column
  tableData.splice(1, 1);

  const keys = [];
  const dataWithoutKeys = [];
  let keysValues = [];

  tableData.map((column, i) => {
    const col = [...column];
    const key = col[0];
    keys.push(key);
    col
      .splice(0, 1);
    dataWithoutKeys.push(col)
  })

  const ranks = dataWithoutKeys[0];
  const clubs = dataWithoutKeys[1];
  const Matches = dataWithoutKeys[2];
  const W = dataWithoutKeys[3];
  const D = dataWithoutKeys[4];
  const L = dataWithoutKeys[5];
  const Goals = dataWithoutKeys[6];
  const PlusMinus = dataWithoutKeys[7];
  const Pts = dataWithoutKeys[8];

  ranks.forEach((column, columnIndex) => {
    let oneRowData = {};
      keys.forEach((key, keyIndex) => {
        if (dataWithoutKeys[keyIndex][columnIndex]) {
          oneRowData = {...oneRowData, [key]: dataWithoutKeys[keyIndex][columnIndex]}
        }
      })

      if (Object.keys(oneRowData).length) {
        keysValues.push(oneRowData);
      }
  })

  return keysValues;
}



transformYearsAndSortData = (data) => {
  const tableData = [...data];
}


function fixSeasonKeyLabel(season, table, leaders) {
  return {
    [season]: {
      table,
      leaders
    }
  }
}

module.exports = {transformTableData, fixSeasonKeyLabel};