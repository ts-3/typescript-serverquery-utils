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

describe('Bells', function() {

  it('Should escape bell', function() {
    assert.equal(ts3utils.escapeBells('\a'), '\\a')
  })

  it('Should escape bells', function() {
    assert.equal(ts3utils.escapeBells('\a \a \a'), '\\a \\a \\a')
  })

  it('Should escape bells in string', function() {
    assert.equal(ts3utils.escapeBells('Hello \a World\a! \a'), 'Hello \\a World\\a! \\a')
  })

  it('Should unescape bell', function() {
    assert.equal(ts3utils.unescapeBells('\\a'), '\a')
  })

  it('Should unescape bells', function() {
    assert.equal(ts3utils.unescapeBells('\\a \\a \\a'), '\a \a \a')
  })

  it('Should unescape bells in string', function() {
    assert.equal(ts3utils.unescapeBells('Hello \\a World\\a! \\a'), 'Hello \a World\a! \a')
  })

})
