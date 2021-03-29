const mapData = require('./raw/maps.json')

const allMapNames = [...new Set([...mapData.byPlayerSize['2'], ...mapData.byPlayerSize['4'], ...mapData.byPlayerSize['6'], ...mapData.byPlayerSize['8']])]

module.exports = { mapData: mapData, allMapNames: allMapNames }
