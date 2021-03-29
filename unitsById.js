
const units = require('./units')
const unitsById = {}
units.forEach(u => {
  unitsById[u.id] = u
})

module.exports = unitsById
