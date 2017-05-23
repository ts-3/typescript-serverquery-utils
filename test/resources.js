'use strict'

/**
 * ISC License
 *
 * Copyright (c) 2017, Antoine Pous <gecko@dvp.io>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

let _ = require('underscore')
let assert = require('assert')

// TODO: See if teamspeak.com release official lists to parse for checking permissions, definitions and client-versions

describe('Check ressources', function() {

  it('Load definitions', function() {

    try {
      let TS3Definitions = require('../definitions')
    } catch(e) {
      throw new Error(e)
    }

  })

  it('Test definitions data type', function() {
    let TS3Definitions = require('../definitions')
    assert.equal(_.isObject(TS3Definitions) && !_.isArray(TS3Definitions) && !_.isFunction(TS3Definitions), true)
  })

  it('Load client-versions', function() {

    try {
      let TS3ClientVersions = require('../client-versions')
    } catch(e) {
      throw new Error(e)
    }

  })

  let TS3ClientVersions = require('../client-versions')

  for(let k in TS3ClientVersions) {

    it('Test client-versions ' + k + ' type', function() {
      assert.equal(_.isArray(TS3ClientVersions[k]), true)
      assert.equal(_.isObject(TS3ClientVersions[k][0]) && !_.isArray(TS3ClientVersions[k][0]) && !_.isFunction(TS3ClientVersions[k][0]), true)
    })

  }

})
