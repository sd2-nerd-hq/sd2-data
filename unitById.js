
const units = require("./units")
const unitById = {}
units.forEach(u => {
    unitById[u.id] = u
})

module.exports = unitById