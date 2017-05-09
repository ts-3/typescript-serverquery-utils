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
let ts3defs = require('../definitions')
let assert = require('assert')
let expect = require('chai').expect

describe('buildQuery', function() {

  it('Should return command type error', function() {
    let query = ts3utils.buildQuery({}, {}, [])
    expect(query).to.be.an.instanceof(Error)
    assert.equal(query.message, 'The command must be a string!')
  })

  it('Should return command type error', function() {
    let query = ts3utils.buildQuery('fakecmd', '', [])
    expect(query).to.be.an.instanceof(Error)
    assert.equal(query.message, 'The parameters must be a JSON object!')
  })

  it('Should return command type error', function() {
    let query = ts3utils.buildQuery('fakecmd', {}, {})
    expect(query).to.be.an.instanceof(Error)
    assert.equal(query.message, 'The flags must be an array!')
  })

  it('Simple command', function() {
    assert.equal(ts3utils.buildQuery('whoami', {}, []), 'whoami')
  })

  it('Command with parameters and without flags', function() {
    assert.equal(ts3utils.buildQuery('serveredit', {virtualserver_name:'TeamSpeak ]|[ Server'}, []), 'serveredit virtualserver_name=TeamSpeak\\s]\\p[\\sServer')
  })

  it('Command with parameters using definitions and multiple values', function() {

    assert.equal(ts3utils.buildQuery(
      'clientkick',
      {
        reasonid: ts3defs.REASON_KICK_SERVER,
        reasonmsg: 'Go away!',
        clid: [1,2,3]
      },
      []
    ),
    'clientkick reasonid=5 reasonmsg=Go\\saway! clid=1|clid=2|clid=3')
  })

  it('Fake command with all options', function() {

    assert.equal(
      ts3utils.buildQuery(
        'fakecmd',
        {
          reasonid: ts3defs.REASON_KICK_SERVER,
          reasonmsg: 'Go away!',
          clid: [1,2,3]
        },
        ['uid','voice']
      ),
      'fakecmd reasonid=5 reasonmsg=Go\\saway! clid=1|clid=2|clid=3 -uid -voice'
    )
  })

})
