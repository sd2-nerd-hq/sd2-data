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
