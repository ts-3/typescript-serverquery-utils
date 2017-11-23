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
let expect = require('chai').expect

describe('Check getClientBuildByVersion method', function() {

  it('Get single desktop client build by version', function() {
    assert.deepEqual(ts3utils.getClientBuildByVersion('3.0.0', 'desktop'), [14954])
  })

  it('Get multiple desktop client builds by version', function() {
    assert.deepEqual(ts3utils.getClientBuildByVersion('3.0.5', 'desktop'), [1328254851, 1328791207, 1329129765, 1329301801])
  })

  it('Get invalid desktop client build by version', function() {
    assert.deepEqual(ts3utils.getClientBuildByVersion('invalid version', 'desktop'), [])
  })

  it('Get single android client build by version', function() {
    assert.deepEqual(ts3utils.getClientBuildByVersion('3.0.0', 'android'), [14859])
  })

  it('Get single ios client build by version', function() {
    assert.deepEqual(ts3utils.getClientBuildByVersion('3.0.16', 'ios'), [1408613527])
  })

})

describe('Check getClientVersionByBuild method', function() {

  it('Get single desktop client version by build', function() {
    assert.deepEqual(ts3utils.getClientVersionByBuild(14954, 'desktop'), ['3.0.0'])
  })

  it('Get multiple android client versions by build', function() {
    assert.deepEqual(ts3utils.getClientVersionByBuild(1427190433, 'android'), ['3.0.18', '3.0.18.1'])
  })

  it('Get invalid desktop client version by build', function() {
    assert.deepEqual(ts3utils.getClientVersionByBuild('invalid version', 'desktop'), [])
  })

  it('Get single android client version by build', function() {
    assert.deepEqual(ts3utils.getClientVersionByBuild(14859, 'android'), ['3.0.0'])
  })

  it('Get single ios client version by build', function() {
    assert.deepEqual(ts3utils.getClientVersionByBuild(1408613527, 'ios'), ['3.0.16'])
  })

})
