const {transformTableData} = require('../transformer');
const {
  SerieAFullSeasonTransformedData,
  serieAFullSeasonData,
  transformedShortLaLIgaData,
  sourceShortLaLigaData,
  seasonKeySourceData,
  seasonKeyYearData
} = require('../../mockups');


const {fixLeagueKey} = require('../fixLeagueKey');

describe('SOURCE DATA ARRAY TO SEASON JSON', () => {
  it('check it transform table data', () => {
    transformTableData(sourceShortLaLigaData);
    expect(transformTableData(sourceShortLaLigaData)).toStrictEqual(transformedShortLaLIgaData);
  })

  it('test with real data Serie A', () => {
    expect(transformTableData(serieAFullSeasonData)).toStrictEqual(SerieAFullSeasonTransformedData);
    expect(transformTableData(serieAFullSeasonData).length).toEqual(serieAFullSeasonData[0].length - 1);
  })
})

describe('JSON FIX SEASON KEY TO ', () => {
  it('check year fixing', ()=> {
    fixLeagueKey(seasonKeySourceData)

    console.log('fixLeagueKey(seasonKeySourceData)', fixLeagueKey(seasonKeySourceData));
    expect(fixLeagueKey(seasonKeySourceData)).toStrictEqual(seasonKeyYearData);
  })
})
