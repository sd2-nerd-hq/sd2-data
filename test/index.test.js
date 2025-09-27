/* eslint-disable no-undef */
const assert = require('assert')
const chai = require('chai')
const data = require('../index')

expect = chai.expect

describe('DoesItBuild?', () => {
  it('builds', () => {
    assert(!!data)
  })
})

describe('Divisions', () => {
  it('DivisionsById', () => {
    expect(data.divisions.divisionsById[431].name).to.equal('97-ya Gvard. Strelkovy')
  })
})


describe('No conflicts', () => {

  it('no_conflicting_ids?', () => {

    const divs = [...data.divisions.divisionsAllies, ...data.divisions.divisionsAxis,
    ...data.divisions.divisionsPact, ...data.divisions.divisionsNato];

    while (divs.length !== 0) {

      const divId = divs.pop().id;

      divs.forEach(d => {
        expect(divId).is.not.equal(d.id);
      });
    }
  })

});
