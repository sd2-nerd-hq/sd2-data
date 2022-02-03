const allies = require('./raw/divisionsAllies.json')
const axis = require('./raw/divisionsAxis.json')
const nato = require('./raw/divisionsNato.json')
const pact = require('./raw/divisionsPact.json')


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

const divisionsById = createKeyMap([...allies, ...axis, ...nato, ...pact])
const divisionsByAlias = keyMapAlias([...allies, ...axis, ...nato, ...pact])
module.exports = { divisionsAllies: allies, divisionsAxis: axis, divisionsNato: nato, divisionsPact: pact, divisionsById, divisionsByAlias:divisionsByAlias }
