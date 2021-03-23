const allies = require("./raw/divisionsAllies.json")
const axis = require("./raw/divisionsAxis.json")

const createKeyMap = (divisionData => {
    const byBinaryKey = {}
    divisionData.forEach((division) => {
        byBinaryKey[division.binaryKey] = division
    })
    return byBinaryKey
})

const divisionByBinaryKeyAllies = createKeyMap(allies)
const divisionByBinaryKeyAxis = createKeyMap(axis)

module.exports = { divisionsAllies: allies, divisionsAxis: axis, divisionByBinaryKeyAllies, divisionByBinaryKeyAxis }