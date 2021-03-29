// Should i move it to /raw really?

const incomeLevel = {
  0: 'None',
  1: 'Very Low',
  2: 'Low',
  3: 'Normal',
  4: 'High',
  5: 'Very High'
}

const mode = {
  2: 'Conquest',
  3: 'Closer Combat',
  5: 'Breakthrough'
}

const victory = {
  0: 'Total Defeat',
  1: 'Major Defeat',
  2: 'Minor Defeat',
  3: 'Draw',
  4: 'Minor Victory',
  5: 'Major Victory',
  6: 'Total Victory'
}

const scoreLimit = {
  1000: 'Low',
  2000: 'Normal',
  4000: 'High'
}

const incomeTypes = {
  0: 'Balanced',
  1: 'Vanguard',
  2: 'Maverick',
  3: 'Juggernaut',
  4: 'Flat line',
  5: 'V for victory'
}

module.exports = { incomeLevel, incomeTypes, scoreLimit, victory, mode }
