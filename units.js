
const unitData = require('./raw/units.json')
const units = [...Object.entries(unitData)]
  .map(([id, data]) => {
    data.id = id
    return data
  })

const unitsById = {}
units.forEach(u => {
  unitsById[u.id] = u
})

module.exports = { unitsById, units }
