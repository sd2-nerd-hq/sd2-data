
const unitData = require('./raw/units.json')
const units = [...Object.entries(unitData)]
  .map(([id, data]) => {
    data.id = id
    return data
  })

module.exports = units
