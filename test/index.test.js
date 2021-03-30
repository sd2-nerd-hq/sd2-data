/* eslint-disable no-undef */
const assert = require('assert')
const data = require('../index')

describe('DoesItBuild?', () => {
  it('builds', () => {
    assert(!!data)
  })
})
