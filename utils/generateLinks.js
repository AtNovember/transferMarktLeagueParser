// // generate links array
function generateLinks(league) {
  // const link = 'https://www.transfermarkt.com/serie-a/tabelle/wettbewerb/IT2/saison_id/'
  const {link, firstSeason, lastSeason} = league;

  const links = []

  for (let year = firstSeason; year < lastSeason; year++) {
    links.push(`${link}${year}`)
  }
  return links;
}

module.exports = {generateLinks};