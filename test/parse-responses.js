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

let ts3utils = require('../index');
let assert = require('assert');
let expect = require('chai').expect;

describe('parseResponse', function() {

  it('Empty response', function() {
    let rows = ts3utils.parseResponse('');
    expect(rows).to.be.an.array;
    assert.equal(rows.length, 1)
  });

  it('Should return parsed error', function() {
    let err = ts3utils.parseResponse('error id=0 msg=ok')
    expect(err).to.deep.equal([ { error: '', id: 0, msg: 'ok' } ])
  });


  it('Should return parsed response', function() {
    let rows = ts3utils.parseResponse('instance instance_uptime=1903203 host_timestamp_utc=1259337246 virtualservers_running_total=1 connection_filetransfer_bandwidth_sent=0|instance_uptime=1903203 host_timestamp_utc=1259337246 virtualservers_running_total=1 connection_filetransfer_bandwidth_sent=0')
    expect(rows).to.deep.equal([ { instance: '', instance_uptime: 1903203, host_timestamp_utc: 1259337246, virtualservers_running_total: 1, connection_filetransfer_bandwidth_sent: 0 }, { instance_uptime: 1903203, host_timestamp_utc: 1259337246, virtualservers_running_total: 1, connection_filetransfer_bandwidth_sent: 0 } ])
  })

});
