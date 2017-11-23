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

let ts3utils = require('../index')
let assert = require('assert')

describe('Slashes', function() {

  it('Should escape slashe', function() {
    assert.equal(ts3utils.escapeSlashes('/'), '\\/')
  })

  it('Should escape slashes', function() {
    assert.equal(ts3utils.escapeSlashes('/ / /'), '\\/ \\/ \\/')
  })

  it('Should escape slashes in string', function() {
    assert.equal(ts3utils.escapeSlashes('Hello / World/! /'), 'Hello \\/ World\\/! \\/')
  })

  it('Should unescape slashe', function() {
    assert.equal(ts3utils.unescapeSlashes('\\/'), '/')
  })

  it('Should unescape slashes', function() {
    assert.equal(ts3utils.unescapeSlashes('\\/ \\/ \\/'), '/ / /')
  })

  it('Should unescape slashes in string', function() {
    assert.equal(ts3utils.unescapeSlashes('Hello \\/ World\\/! \\/'), 'Hello / World/! /')
  })

})
