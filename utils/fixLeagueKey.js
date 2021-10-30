const {oldKeys, replaceKeys} = require('./generateSeasons');

function fixLeagueKey(parsedData, league) {

  const loadedData = [...parsedData];
  let newData = [];

  loadedData.map((row) => {
    const oldKey = Object.keys(row)[0];
    // todo: придумать как автоматизировать
    // const year = oldKey.split(" ")[2]; // для ла лиги 1
    const year = oldKey.split(" ")[3]; // для италии, ла лиги 2

    const index = oldKeys.findIndex(val => val === year)
    const newKey = replaceKeys[index];
    const rowWithLeague = {...row}
    rowWithLeague[oldKey] = {...rowWithLeague[oldKey], league}

    const newObject = {};

    if (newKey) {
      delete Object.assign(newObject, rowWithLeague, {[newKey]: rowWithLeague[oldKey] })[oldKey];
    } else {
      Object.assign(newObject, rowWithLeague)
    }

    newData.push(newObject)
  })

  return newData;
}

module.exports = {fixLeagueKey};
