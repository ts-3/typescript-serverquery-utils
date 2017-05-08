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

let ts3utils = require('../teamspeak3-utils')
let assert = require('assert')

describe('Escape formfeeds', function() {

  it('Should escape formfeed', function() {
    assert.equal(ts3utils.escapeFormfeeds('\f'), '\\f')
  })

  it('Should escape formfeeds', function() {
    assert.equal(ts3utils.escapeFormfeeds('\f \f \f'), '\\f \\f \\f')
  })

  it('Should escape formfeeds in string', function() {
    assert.equal(ts3utils.escapeFormfeeds('Hello \f World\f! \f'), 'Hello \\f World\\f! \\f')
  })

  it('Should unescape formfeed', function() {
    assert.equal(ts3utils.unescapeFormfeeds('\\f'), '\f')
  })

  it('Should unescape formfeeds', function() {
    assert.equal(ts3utils.unescapeFormfeeds('\\f \\f \\f'), '\f \f \f')
  })

  it('Should unescape formfeeds in string', function() {
    assert.equal(ts3utils.unescapeFormfeeds('Hello \\f World\\f! \\f'), 'Hello \f World\f! \f')
  })

})
