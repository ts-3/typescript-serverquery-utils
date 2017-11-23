"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const TS3ClientVersions = require("./client-versions.json");
/**
 * Escape Backslashes
 *
 * @description Escape backslashes from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeBackslashes = (str) => {
    return String(str).replace(/\\/g, '\\\\');
};
exports.escapeBackslashes = escapeBackslashes;
/**
 * Escape Bells
 *
 * @description Escape bells from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeBells = (str) => {
    return String(str).replace(/\a/g, '\\a');
};
exports.escapeBells = escapeBells;
/**
 * Escape Carriages Returns
 *
 * @description Escape carriages returns from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeCarriagesReturns = (str) => {
    return String(str).replace(/\r/g, '\\r');
};
exports.escapeCarriagesReturns = escapeCarriagesReturns;
/**
 * Escape Form feeds
 *
 * @description Escape from feeds from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeFormfeeds = (str) => {
    return String(str).replace(/\f/g, '\\f');
};
exports.escapeFormfeeds = escapeFormfeeds;
/**
 * Escape Newlines
 *
 * @description Escape newlines from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeNewlines = (str) => {
    return String(str).replace(/\n/g, '\\n');
};
exports.escapeNewlines = escapeNewlines;
/**
 * Escape Pipes
 *
 * @description Escape pipes from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapePipes = (str) => {
    return String(str).replace(/\|/g, '\\p');
};
exports.escapePipes = escapePipes;
/**
 * Escape Slashes
 *
 * @description Escape slashes from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeSlashes = (str) => {
    return String(str).replace(/\//g, '\\/');
};
exports.escapeSlashes = escapeSlashes;
/**
 * Escape Tabulations
 *
 * @description Escape tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeTabulations = (str) => {
    return String(str).replace(/\t/g, '\\t');
};
exports.escapeTabulations = escapeTabulations;
/**
 * Escape Vertical Tabulations
 *
 * @description Escape vertical tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeVerticalTabulations = (str) => {
    return String(str).replace(/\v/g, '\\v');
};
exports.escapeVerticalTabulations = escapeVerticalTabulations;
/**
 * Escape Whitespaces
 *
 * @description Escape whitespaces from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeWhitespaces = (str) => {
    return String(str).replace(/\s/g, '\\s');
};
exports.escapeWhitespaces = escapeWhitespaces;
/**
 * Escape String
 *
 * @description Escape the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escape = (str) => {
    let ret = escapeBackslashes(str);
    ret = escapeSlashes(ret);
    ret = escapePipes(ret);
    ret = escapeNewlines(ret);
    ret = escapeCarriagesReturns(ret);
    ret = escapeTabulations(ret);
    ret = escapeVerticalTabulations(ret);
    ret = escapeFormfeeds(ret);
    ret = escapeWhitespaces(ret);
    return ret;
};
exports.escape = escape;
/**
 * Unescape Backslashes
 *
 * @description Unescape backslashes from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeBackslashes = (str) => {
    return String(str).replace(/\\\\/g, '\\');
};
exports.unescapeBackslashes = unescapeBackslashes;
/**
 * Unescape Bells
 *
 * @description Unescape bells from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeBells = (str) => {
    return String(str).replace(/\\a/g, '\a');
};
exports.unescapeBells = unescapeBells;
/**
 * Unescape Carriages Returns
 *
 * @description Unescape carriages returns from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeCarriagesReturns = (str) => {
    return String(str).replace(/\\r/g, '\r');
};
exports.unescapeCarriagesReturns = unescapeCarriagesReturns;
/**
 * Unescape Form feeds
 *
 * @description Unescape from feeds from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeFormfeeds = (str) => {
    return String(str).replace(/\\f/g, '\f');
};
exports.unescapeFormfeeds = unescapeFormfeeds;
/**
 * Unescape Newlines
 *
 * @description Unescape newlines from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeNewlines = (str) => {
    return String(str).replace(/\\n/g, '\n');
};
exports.unescapeNewlines = unescapeNewlines;
/**
 * Unescape Pipes
 *
 * @description Unescape pipes from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapePipes = (str) => {
    return String(str).replace(/\\p/g, '|');
};
exports.unescapePipes = unescapePipes;
/**
 * Unescape Slashes
 *
 * @description Unescape slashes from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeSlashes = (str) => {
    return String(str).replace(/\\\//g, '\/');
};
exports.unescapeSlashes = unescapeSlashes;
/**
 * Unescape Tabulations
 *
 * @description Unescape tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeTabulations = (str) => {
    return String(str).replace(/\\t/g, '\t');
};
exports.unescapeTabulations = unescapeTabulations;
/**
 * Unescape Vertical tabulations
 *
 * @description Unescape vertical tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeVerticalTabulations = (str) => {
    return String(str).replace(/\\v/g, '\v');
};
exports.unescapeVerticalTabulations = unescapeVerticalTabulations;
/**
 * Unescape Whitespaces
 *
 * @description Unescape whitespaces from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeWhitespaces = (str) => {
    return String(str).replace(/\\s/g, ' ');
};
exports.unescapeWhitespaces = unescapeWhitespaces;
/**
 * Unescape String
 *
 * @description Unescape the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescape = (str) => {
    let ret = unescapeWhitespaces(str);
    ret = unescapePipes(ret);
    ret = unescapeNewlines(ret);
    ret = unescapeFormfeeds(ret);
    ret = unescapeCarriagesReturns(ret);
    ret = unescapeTabulations(ret);
    ret = unescapeVerticalTabulations(ret);
    ret = unescapeSlashes(ret);
    ret = unescapeBackslashes(ret);
    return ret;
};
exports.unescape = unescape;
/**
 * Build Query
 *
 * @description Build the query from parameters
 * @since 1.1.0
 * @param cmd {string} Command name
 * @param params {object} Parameters
 * @param flags {Array<string>}
 * @return {string} Escaped query string
 */
let buildQuery = (cmd, params, flags) => {
    let query = cmd;
    for (let k in params) {
        let v = params[k];
        if (Object.prototype.toString.call(v) === '[object Array]') {
            let paramOpts = v.map((val) => {
                return `${escape(k)}=${escape(val)}`;
            });
            query = `${query} ${paramOpts.join('|')}`;
        }
        else {
            query = `${query} ${escape(k)}=${escape(v)}`;
        }
    }
    if (flags.length > 0) {
        query = `${query} -${flags.join(' -')}`;
    }
    return `${query}\n`;
};
exports.buildQuery = buildQuery;
/**
 * Parse response
 *
 * @description Parse the response
 * @since 1.3.0
 * @param str {String} Server query response
 * @return Object Parsed response
 */
let parseResponse = (str) => {
    return str.split('|').map((k) => {
        let row = {};
        k.split(/\s/).forEach((v) => {
            let pos = v.indexOf('=');
            if (pos > -1) {
                let key = unescape(v.substr(0, pos));
                let value = unescape(v.substr(pos + 1, v.length));
                row[key] = parseInt(value, 10) === +value ? parseInt(value, 10) : value;
            }
            else if (!lodash_1.isEmpty(v)) {
                row[v] = '';
            }
        });
        return row;
    });
};
exports.parseResponse = parseResponse;
/**
 * Get client builds by version
 *
 * @description return the client builds for the specified version/os
 * @since 1.4.0
 * @param version {string} Searched version
 * @param os {string} Search through the OS versions
 * @return {Array<number>} Builds found
 */
let getClientBuildByVersion = (version, os) => {
    let builds = [];
    os = os.toLowerCase();
    if (!(os in TS3ClientVersions)) {
        return Error(`${os} seem not supported!`);
    }
    for (let i = 0; i < TS3ClientVersions[os].length; i++) {
        if (TS3ClientVersions[os][i].version === version) {
            builds.push(TS3ClientVersions[os][i].build);
        }
    }
    return builds;
};
exports.getClientBuildByVersion = getClientBuildByVersion;
/**
 * Get client versions by build
 *
 * @description return the client versions for the specified build/os
 * @since 1.4.0
 * @param build {number} Searched build
 * @param os {string} Search through the OS versions
 * @returns {Array<number>} Versions found
 * @returns {Error} Error
 */
let getClientVersionByBuild = (build, os) => {
    let versions = [];
    os = os.toLowerCase();
    if (!(os in TS3ClientVersions)) {
        return Error(`${os} seem not supported!`);
    }
    for (let i = 0; i < TS3ClientVersions[os].length; i++) {
        if (TS3ClientVersions[os][i].build === build) {
            versions.push(TS3ClientVersions[os][i].version);
        }
    }
    return versions;
};
exports.getClientVersionByBuild = getClientVersionByBuild;
exports.default = {
    buildQuery, parseResponse,
    getClientBuildByVersion, getClientVersionByBuild,
    escape, unescape,
    escapeBells, unescapeBells,
    escapeBackslashes, unescapeBackslashes,
    escapeCarriagesReturns, unescapeCarriagesReturns,
    escapeFormfeeds, unescapeFormfeeds,
    escapeNewlines, unescapeNewlines,
    escapePipes, unescapePipes,
    escapeSlashes, unescapeSlashes,
    escapeTabulations, unescapeTabulations,
    escapeVerticalTabulations, unescapeVerticalTabulations,
    escapeWhitespaces, unescapeWhitespaces
};
