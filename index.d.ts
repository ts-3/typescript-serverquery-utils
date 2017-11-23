/**
 * Escape Backslashes
 *
 * @description Escape backslashes from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapeBackslashes: (str: string) => string;
/**
 * Escape Bells
 *
 * @description Escape bells from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapeBells: (str: string) => string;
/**
 * Escape Carriages Returns
 *
 * @description Escape carriages returns from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapeCarriagesReturns: (str: string) => string;
/**
 * Escape Form feeds
 *
 * @description Escape from feeds from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapeFormfeeds: (str: string) => string;
/**
 * Escape Newlines
 *
 * @description Escape newlines from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapeNewlines: (str: string) => string;
/**
 * Escape Pipes
 *
 * @description Escape pipes from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapePipes: (str: string) => string;
/**
 * Escape Slashes
 *
 * @description Escape slashes from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapeSlashes: (str: string) => string;
/**
 * Escape Tabulations
 *
 * @description Escape tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapeTabulations: (str: string) => string;
/**
 * Escape Vertical Tabulations
 *
 * @description Escape vertical tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapeVerticalTabulations: (str: string) => string;
/**
 * Escape Whitespaces
 *
 * @description Escape whitespaces from the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escapeWhitespaces: (str: string) => string;
/**
 * Escape String
 *
 * @description Escape the string
 * @since 1.0.0
 * @param str {String} Text to escape
 * @return {String} Escaped string
 */
declare let escape: (str: string) => string;
/**
 * Unescape Backslashes
 *
 * @description Unescape backslashes from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapeBackslashes: (str: string) => string;
/**
 * Unescape Bells
 *
 * @description Unescape bells from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapeBells: (str: string) => string;
/**
 * Unescape Carriages Returns
 *
 * @description Unescape carriages returns from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapeCarriagesReturns: (str: string) => string;
/**
 * Unescape Form feeds
 *
 * @description Unescape from feeds from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapeFormfeeds: (str: string) => string;
/**
 * Unescape Newlines
 *
 * @description Unescape newlines from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapeNewlines: (str: string) => string;
/**
 * Unescape Pipes
 *
 * @description Unescape pipes from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapePipes: (str: string) => string;
/**
 * Unescape Slashes
 *
 * @description Unescape slashes from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapeSlashes: (str: string) => string;
/**
 * Unescape Tabulations
 *
 * @description Unescape tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapeTabulations: (str: string) => string;
/**
 * Unescape Vertical tabulations
 *
 * @description Unescape vertical tabulations from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapeVerticalTabulations: (str: string) => string;
/**
 * Unescape Whitespaces
 *
 * @description Unescape whitespaces from the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescapeWhitespaces: (str: string) => string;
/**
 * Unescape String
 *
 * @description Unescape the string
 * @since 1.0.0
 * @param str {String} Text to unescape
 * @return String Unescaped string
 */
declare let unescape: (str: string) => string;
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
declare let buildQuery: (cmd: string, params: object, flags: string[]) => string;
/**
 * Parse response
 *
 * @description Parse the response
 * @since 1.3.0
 * @param str {String} Server query response
 * @return Object Parsed response
 */
declare let parseResponse: (str: string) => object;
/**
 * Get client builds by version
 *
 * @description return the client builds for the specified version/os
 * @since 1.4.0
 * @param version {string} Searched version
 * @param os {string} Search through the OS versions
 * @return {Array<number>} Builds found
 */
declare let getClientBuildByVersion: (version: string, os: string) => number[] | Error;
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
declare let getClientVersionByBuild: (build: number, os: string) => Error | (string | void)[];
export { buildQuery, parseResponse, getClientBuildByVersion, getClientVersionByBuild, escape, unescape, escapeBells, unescapeBells, escapeBackslashes, unescapeBackslashes, escapeCarriagesReturns, unescapeCarriagesReturns, escapeFormfeeds, unescapeFormfeeds, escapeNewlines, unescapeNewlines, escapePipes, unescapePipes, escapeSlashes, unescapeSlashes, escapeTabulations, unescapeTabulations, escapeVerticalTabulations, unescapeVerticalTabulations, escapeWhitespaces, unescapeWhitespaces };
declare const _default: {
    buildQuery: (cmd: string, params: object, flags: string[]) => string;
    parseResponse: (str: string) => object;
    getClientBuildByVersion: (version: string, os: string) => number[] | Error;
    getClientVersionByBuild: (build: number, os: string) => Error | (string | void)[];
    escape: (str: string) => string;
    unescape: (str: string) => string;
    escapeBells: (str: string) => string;
    unescapeBells: (str: string) => string;
    escapeBackslashes: (str: string) => string;
    unescapeBackslashes: (str: string) => string;
    escapeCarriagesReturns: (str: string) => string;
    unescapeCarriagesReturns: (str: string) => string;
    escapeFormfeeds: (str: string) => string;
    unescapeFormfeeds: (str: string) => string;
    escapeNewlines: (str: string) => string;
    unescapeNewlines: (str: string) => string;
    escapePipes: (str: string) => string;
    unescapePipes: (str: string) => string;
    escapeSlashes: (str: string) => string;
    unescapeSlashes: (str: string) => string;
    escapeTabulations: (str: string) => string;
    unescapeTabulations: (str: string) => string;
    escapeVerticalTabulations: (str: string) => string;
    unescapeVerticalTabulations: (str: string) => string;
    escapeWhitespaces: (str: string) => string;
    unescapeWhitespaces: (str: string) => string;
};
export default _default;
