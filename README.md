# teamspeak3-utils
Tools for Teamspeak 3 ServerQuery Client

[![Build Status](https://travis-ci.org/antoine-pous/node-teamspeak3-utils.svg?branch=master)](https://travis-ci.org/antoine-pous/node-teamspeak3-utils)

## Installation

```sh
$ npm install teamspeak3-utils --save
```

### Build your queries
The `buildQuery` method is an helper wich allow you to build easily your queries. The query is automaticly escaped and the result is returned.

```js
let ts3utils = require('teamspeak3-utils')

console.log(ts3utils.buildQuery('serveredit', {virtualserver_name:'TeamSpeak ]|[ Server'})) // serveredit virtualserver_name=TeamSpeak\s]\p[\sServer
```

### Definitions
The TeamSpeak 3 definitions are available in one object. You can use it to set easily your values.

```js
let ts3defs = require('teamspeak3-utils/definitions')

console.log(ts3defs.CODEC_CRYPT_ENABLED) // 2
```

### Escaping
All the `escape` & `unescape` methods have the same workaround, you provide a string and it returns the final string.

```js
let ts3utils = require('teamspeak3-utils')

console.log(ts3utils.escape('Hello world!')) // Hello\\sworld!
console.log(ts3utils.unescape('Hello\\sworld!')) // Hello world!
```

You can use specifics methods if you need, here are the methods :

- escapeBackslashes
- unescapeBackslashes
- escapeBell
- unescapeBell
- escapeCarriagesReturns
- unescapeCarriagesReturns
- escapeFormfeeds
- unescapeFormfeeds
- escapeNewlines
- unescapeNewlines
- escapePipes
- unescapePipes
- unescapeSlashes
- escapeSlashes
- escapeTabulations
- unescapeTabulations
- escapeVerticalTabulations
- unescapeVerticalTabulations
- escapeWhitespaces
- unescapeWhitespaces

## Bugs & suggestions
If you found bug or have any suggestion feel free to open a ticket
