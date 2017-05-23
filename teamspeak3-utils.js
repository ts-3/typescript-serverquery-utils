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

exports = module.exports = {

  /**
   * Escape Backslashes
   *
   * @description Escape backslashes from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapeBackslashes: function(str) {
    return String(str).replace(/\\/g, '\\\\')
  },

  /**
   * Escape Bells
   *
   * @description Escape bells from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapeBells: function(str) {
    return String(str).replace(/\a/g, '\\a')
  },

  /**
   * Escape Carriages Returns
   *
   * @description Escape carriages returns from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapeCarriagesReturns: function(str) {
    return String(str).replace(/\r/g, '\\r')
  },

  /**
   * Escape Form feeds
   *
   * @description Escape from feeds from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapeFormfeeds: function(str) {
    return String(str).replace(/\f/g, '\\f')
  },

  /**
   * Escape Newlines
   *
   * @description Escape newlines from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapeNewlines: function(str) {
    return String(str).replace(/\n/g, '\\n')
  },

  /**
   * Escape Pipes
   *
   * @description Escape pipes from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapePipes: function(str) {
    return String(str).replace(/\|/g, '\\p')
  },

  /**
   * Escape Slashes
   *
   * @description Escape slashes from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapeSlashes: function(str) {
    return String(str).replace(/\//g, '\\/')
  },

  /**
   * Escape Tabulations
   *
   * @description Escape tabulations from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapeTabulations: function(str) {
    return String(str).replace(/\t/g, '\\t')
  },

  /**
   * Escape Vertical Tabulations
   *
   * @description Escape vertical tabulations from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapeVerticalTabulations: function(str) {
    return String(str).replace(/\v/g, '\\v')
  },

  /**
   * Escape Whitespaces
   *
   * @description Escape whitespaces from the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escapeWhitespaces: function(str) {
    return String(str).replace(/\s/g, '\\s')
  },

  /**
   * Escape String
   *
   * @description Escape the string
   * @since 1.0.0
   * @param String str Text to escape
   * @return String Escaped string
   */
  escape: function (str) {

    let ret = this.escapeBackslashes(str)
    ret = this.escapeSlashes(ret)
    ret = this.escapePipes(ret)
    ret = this.escapeNewlines(ret)
    ret = this.escapeCarriagesReturns(ret)
    ret = this.escapeTabulations(ret)
    ret = this.escapeVerticalTabulations(ret)
    ret = this.escapeFormfeeds(ret)
    ret = this.escapeWhitespaces(ret)

    return ret
  },

  /**
   * Unescape Backslashes
   *
   * @description Unescape backslashes from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapeBackslashes: function(str) {
    return String(str).replace(/\\\\/g, '\\')
  },

  /**
   * Unescape Bells
   *
   * @description Unescape bells from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapeBells: function(str) {
    return String(str).replace(/\\a/g, '\a')
  },

  /**
   * Unescape Carriages Returns
   *
   * @description Unescape carriages returns from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapeCarriagesReturns: function(str) {
    return String(str).replace(/\\r/g, '\r')
  },

  /**
   * Unescape Form feeds
   *
   * @description Unescape from feeds from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapeFormfeeds: function(str) {
    return String(str).replace(/\\f/g, '\f')
  },

  /**
   * Unescape Newlines
   *
   * @description Unescape newlines from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapeNewlines: function(str) {
    return String(str).replace(/\\n/g, '\n')
  },

  /**
   * Unescape Pipes
   *
   * @description Unescape pipes from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapePipes: function(str) {
    return String(str).replace(/\\p/g, '|')
  },

  /**
   * Unescape Slashes
   *
   * @description Unescape slashes from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapeSlashes: function(str) {
    return String(str).replace(/\\\//g, '\/')
  },

  /**
   * Unescape Tabulations
   *
   * @description Unescape tabulations from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapeTabulations: function(str) {
    return String(str).replace(/\\t/g, '\t')
  },

  /**
   * Unescape Vertical tabulations
   *
   * @description Unescape vertical tabulations from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapeVerticalTabulations: function(str) {
    return String(str).replace(/\\v/g, '\v')
  },

  /**
   * Unescape Whitespaces
   *
   * @description Unescape whitespaces from the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescapeWhitespaces: function(str) {
    return String(str).replace(/\\s/g, ' ')
  },

  /**
   * Unescape String
   *
   * @description Unescape the string
   * @since 1.0.0
   * @param String str Text to unescape
   * @return String Unescaped string
   */
  unescape: function (str) {
    let ret = this.unescapeWhitespaces(str)
    ret = this.unescapePipes(ret)
    ret = this.unescapeNewlines(ret)
    ret = this.unescapeFormfeeds(ret)
    ret = this.unescapeCarriagesReturns(ret)
    ret = this.unescapeTabulations(ret)
    ret = this.unescapeVerticalTabulations(ret)
    ret = this.unescapeSlashes(ret)
    ret = this.unescapeBackslashes(ret)

    return ret;
  },

  /**
   * Build Query
   *
   * @description Build the query from parameters
   * @since 1.1.0
   * @param String str Command name
   * @param Object params Parameters
   * @param Array flags Flags
   * @return String Escaped query string
   */
  buildQuery: function(cmd, params, flags) {
    let _ = require('underscore')

    // Validate the type of cmd
    if(!_.isString(cmd)) {
      return new Error('The command must be a string!')
    }

    // Validate the type of params
    if(!_.isObject(params)) {
      return new Error('The parameters must be a JSON object!')
    }

    // Validate the type of flags
    if(!_.isArray(flags)) {
      return new Error('The flags must be an array!')
    }

    let self = this
    let query = cmd

    for(let k in params) {

      let v = params[k]

      if(Object.prototype.toString.call(v) === '[object Array]') {

        let paramOpts = v.map(function(val) {
          return self.escape(k) + '=' + self.escape(val)
        })

        query += ' ' + paramOpts.join('|')

      } else {
        query += ' ' + self.escape(k) + '=' + self.escape(v)
      }

    }

    if(flags.length > 0) {
      query += ' -' + flags.join(' -')
    }

    return query + '\n'
  },

  /**
   * Parse response
   *
   * @description Parse the response
   * @since 1.3.0
   * @param String str Server query response
   * @return Object Parsed response
   */
   parseResponse: function(str) {
     let _ = require('underscore')

     // Validate the type of str
     if(!_.isString(str)) {
       return new Error('The query must be a string!')
     }

     let self = this

     let rows = str.split('|').map(function(k) {

       let row = {}

       k.split(/\s/).forEach(function(v) {

        if(v.indexOf('=') > -1) {
          let i = v.indexOf('=')
          let key = self.unescape(v.substr(0, i))
          let value = self.unescape(v.substr(i+1, v.length))
          row[key] = parseInt(value, 10) == value ? parseInt(value, 10) : value
        } else if(!_.isEmpty(v)) {
          row[v] = ''
        }

      })

      if(row.length === 0){
  			row = null;
  		} else if(row.length === 1){
  			row = row.shift();
  		}

      return row
    })

    return rows
  },

  /**
   * Get client builds by version
   *
   * @description return the client builds for the specified version
   * @since 1.0.0
   * @param String version Searched version
   * @param String os Search through the OS versions
   * @return Array Builds found
   */
  getClientBuildByVersion: function (version, os) {

    let _ = require('underscore')
    let TS3ClientVersions = require('./client-versions.json')
    let builds = []

    if(!_.isString(version)) {
      return Error('Version parameter must be a string!')
    }

    if(!_.isString(os)) {
      return Error('OS parameter must be a string!')
    }

    os = os.toLowerCase()

    if(!_.isArray(TS3ClientVersions[os])) {
      return Error('OS ' + os + ' is not supported!')
    }

    for(let i = 0; i < TS3ClientVersions[os].length; i++) {

      if(TS3ClientVersions[os][i].version === version) {
        builds.push(TS3ClientVersions[os][i].build)
      }

    }
    return builds
  }

}
