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

import {isEmpty} from "lodash";
const TS3ClientVersions: object = require("./client-versions.json");

/**
 * Escape Backslashes
 *
 * @description Escape backslashes from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeBackslashes = (str: string) : string =>{
    return String(str).replace(/\\/g, '\\\\')
};

/**
 * Escape Bells
 *
 * @description Escape bells from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeBells = (str: string) : string => {
    return String(str).replace(/\a/g, '\\a')
};

/**
 * Escape Carriages Returns
 *
 * @description Escape carriages returns from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeCarriagesReturns = (str: string) : string => {
    return String(str).replace(/\r/g, '\\r')
};

/**
 * Escape Form feeds
 *
 * @description Escape from feeds from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeFormfeeds = (str: string) : string => {
    return String(str).replace(/\f/g, '\\f')
};

/**
 * Escape Newlines
 *
 * @description Escape newlines from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeNewlines = (str: string) : string => {
    return String(str).replace(/\n/g, '\\n')
};

/**
 * Escape Pipes
 *
 * @description Escape pipes from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapePipes = (str: string) : string => {
    return String(str).replace(/\|/g, '\\p')
};

/**
 * Escape Slashes
 *
 * @description Escape slashes from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeSlashes = (str: string) : string => {
    return String(str).replace(/\//g, '\\/')
};

/**
 * Escape Tabulations
 *
 * @description Escape tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeTabulations = (str: string) : string => {
    return String(str).replace(/\t/g, '\\t')
};

/**
 * Escape Vertical Tabulations
 *
 * @description Escape vertical tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeVerticalTabulations = (str: string) : string => {
    return String(str).replace(/\v/g, '\\v')
};

/**
 * Escape Whitespaces
 *
 * @description Escape whitespaces from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escapeWhitespaces = (str: string) : string => {
    return String(str).replace(/\s/g, '\\s')
};

/**
 * Escape String
 *
 * @description Escape the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
let escape = (str: string) : string => {

    let ret = escapeBackslashes(str);
    ret = escapeSlashes(ret);
    ret = escapePipes(ret);
    ret = escapeNewlines(ret);
    ret = escapeCarriagesReturns(ret);
    ret = escapeTabulations(ret);
    ret = escapeVerticalTabulations(ret);
    ret = escapeFormfeeds(ret);
    ret = escapeWhitespaces(ret);

    return ret
};

/**
 * Unescape Backslashes
 *
 * @description Unescape backslashes from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeBackslashes = (str: string) : string => {
    return String(str).replace(/\\\\/g, '\\')
};

/**
 * Unescape Bells
 *
 * @description Unescape bells from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeBells = (str: string) : string => {
    return String(str).replace(/\\a/g, '\a')
};

/**
 * Unescape Carriages Returns
 *
 * @description Unescape carriages returns from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeCarriagesReturns = (str: string) : string => {
    return String(str).replace(/\\r/g, '\r')
};

/**
 * Unescape Form feeds
 *
 * @description Unescape from feeds from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeFormfeeds = (str: string) : string => {
    return String(str).replace(/\\f/g, '\f')
};

/**
 * Unescape Newlines
 *
 * @description Unescape newlines from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeNewlines = (str: string) : string => {
    return String(str).replace(/\\n/g, '\n')
};

/**
 * Unescape Pipes
 *
 * @description Unescape pipes from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapePipes = (str: string) : string => {
    return String(str).replace(/\\p/g, '|')
};

/**
 * Unescape Slashes
 *
 * @description Unescape slashes from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeSlashes = (str: string) : string => {
    return String(str).replace(/\\\//g, '\/')
};

/**
 * Unescape Tabulations
 *
 * @description Unescape tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeTabulations = (str: string) : string => {
    return String(str).replace(/\\t/g, '\t')
};

/**
 * Unescape Vertical tabulations
 *
 * @description Unescape vertical tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeVerticalTabulations = (str: string) : string => {
    return String(str).replace(/\\v/g, '\v')
};

/**
 * Unescape Whitespaces
 *
 * @description Unescape whitespaces from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescapeWhitespaces = (str: string) : string => {
    return String(str).replace(/\\s/g, ' ')
};

/**
 * Unescape String
 *
 * @description Unescape the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
let unescape = (str: string) : string => {
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

let buildQuery = (cmd: string, params: object, flags: Array<string>) : string => {

    let query: string = cmd;

    for(let k in params) {

        let v: any = (<any>params)[k];

        if(Object.prototype.toString.call(v) === '[object Array]') {

            let paramOpts = v.map((val: any) => {
                return `${escape(k)}=${escape(val)}`;
            });

            query = `${query} ${paramOpts.join('|')}`;

        } else {
            query = `${query} ${escape(k)}=${escape(v)}`;
        }

    }

    if(flags.length > 0) {
        query = `${query} -${flags.join(' -')}`;
    }

    return `${query}\n`
};

/**
 * Parse response
 *
 * @description Parse the response
 * @since 1.3.0
 * @param str {String} Server query response
 * @return Object Parsed response
 */
let parseResponse = (str: string) : object => {

    let rows: any[] = str.split('|').map((k: string) => {

        let row: any = {};

        k.split(/\s/).forEach((v: any) => {

            let pos: number = v.indexOf('=');
            if(pos > -1) {
                let key = unescape(v.substr(0, pos));
                let value = unescape(v.substr(pos + 1, v.length));
                row[key] = parseInt(value, 10) === +value ? parseInt(value, 10) : value;
            } else if(!isEmpty(v)) {
                row[v] = '';
            }

        });

        if(row.length === 0)
            row = null;

        if(row.length === 1)
            row = row.shift();

        return row;
    });

    return rows;
};

/**
 * Get client builds by version
 *
 * @description return the client builds for the specified version/os
 * @since 1.4.0
 * @param version {string} Searched version
 * @param os {string} Search through the OS versions
 * @return {Array<number>} Builds found
 */
let getClientBuildByVersion = (version: string, os: string) : Array<number>|Error => {

    let builds = [];

    os = os.toLowerCase();

    if(!(os in (<any>TS3ClientVersions))) {
        return Error(`${os} seem not supported!`)
    }

    for(let i: number = 0; i < (<any>TS3ClientVersions)[os].length; i++) {

        if((<any>TS3ClientVersions)[os][i].version === version) {
            builds.push((<any>TS3ClientVersions)[os][i].build)
        }

    }
    return builds
};

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
let getClientVersionByBuild = (build: number, os: string) : Array<string|void>|Error => {

    let versions: Array<string|void> = [];

    os = os.toLowerCase();

    if(!(os in (<any>TS3ClientVersions))) {
        return Error(`${os} seem not supported!`)
    }

    for(let i: number = 0; i < (<any>TS3ClientVersions)[os].length; i++) {

        if((<any>TS3ClientVersions)[os][i].build === build) {
            versions.push((<any>TS3ClientVersions)[os][i].version)
        }

    }

    return versions
};

export {
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
}

export default {
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
}
