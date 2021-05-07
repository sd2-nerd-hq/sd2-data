const allies = require('./raw/divisionsAllies.json')
const axis = require('./raw/divisionsAxis.json')

const createKeyMap = divisionData => {
  const byId = {}
  divisionData.forEach((division) => {
    byId[Number(division.id)] = division
  })
  return byId
}

function keyMapAlias(divs){
  const byAlias = {}
  for(let div in divs){
    for(let alias of divs[div].alias){
      byAlias[alias] = divs[div]
    }
  }
  return byAlias
}

const divisionsById = createKeyMap([...allies, ...axis])
const divisionsByAlias = keyMapAlias([...allies, ...axis])
module.exports = { divisionsAllies: allies, divisionsAxis: axis, divisionsById, divisionsByAlias:divisionsByAlias }
