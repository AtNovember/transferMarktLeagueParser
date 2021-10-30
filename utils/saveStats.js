const fs = require('fs').promises

// const saveStats = async (data) => {
//   fs.writeFile('./save/data.json', JSON.stringify(data))
// }

function saveStats(data) {
  fs.writeFile('./save/data.json', JSON.stringify(data))
}

module.exports = {saveStats};