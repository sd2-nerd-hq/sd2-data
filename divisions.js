const allies = require("./raw/divisionsAllies.json")
const axis = require("./raw/divisionsAxis.json")

const createKeyMap = (divisionData => {
    const byId = {}
    divisionData.forEach((division) => {
        byId[division.id] = division.name
    })
    return byId
})

const divisionsById = createKeyMap([...allies,...axis])

module.exports = { divisionsAllies: allies, divisionsAxis: axis,  divisionsById}