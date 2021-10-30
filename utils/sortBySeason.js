// сортируем по сезону:
async function sortLeagueDataBySeason(seasonData) {
  const loadedData = [...seasonData];

    const sortedData = loadedData.sort((objA, objB) => {

      const keyA = parseInt(Object.keys(objA)[0].split('/')[0]);
      const keyB = parseInt(Object.keys(objB)[0].split('/')[0]);

      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })

  return sortedData;
}

module.exports = {sortLeagueDataBySeason};