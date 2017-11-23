# TeamSpeak 3 Query Utils
Query builder and response parser for TeamSpeak 3 ServerQuery interface

[![Build Status](https://travis-ci.org/antoine-pous/node-teamspeak3-utils.svg?branch=master)](https://travis-ci.org/antoine-pous/node-teamspeak3-utils)
[![Dependency Status](https://gemnasium.com/badges/github.com/antoine-pous/node-teamspeak3-utils.svg)](https://gemnasium.com/github.com/antoine-pous/node-teamspeak3-utils)
[![Donate](https://img.shields.io/badge/%E2%99%A5-donate-459042.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MAKZLQGRSBCT2)

## Installation

```sh
$ npm install @ts3/query-utils --save
```

**Note:** TeamSpeak3 Utils is embedded into the [TeamSpeak3 Query Client](https://github.com/antoine-pous/node-teamspeak3-client) package.

Import what you want where you need it with typescript
```typescript
import {parseResponse} from "@ts3/query-utils";
console.log(parseResponse("error id=0 msg=ok")) // {id: 0, msg: "ok"}
```

Or simply use NodeJS
```typescript
let TS3Utils = require('@ts3/query-utils');
console.log(TS3Utils.parseResponse("error id=0 msg=ok")) // {id: 0, msg: "ok"}
```

This package is ES6 compliant, it require NodeJS 6+

### Build your queries
The `buildQuery` method is an helper wich allow you to build easily your queries. The query is automaticly escaped and the result is returned.

If an error is occurred, the result is an instance of `Error`

```js
let ts3utils = require('teamspeak3-utils')
let query = ts3utils.buildQuery('serveredit', {virtualserver_name:'TeamSpeak ]|[ Server'})

if(query instanceof Error) {
  console.log('Error: ' + query.message)
} else {
  console.log(query) // serveredit virtualserver_name=TeamSpeak\s]\p[\sServer  
}
```

### Parse responses
The `parseResponse` method provide an easy way to treat your data.

```js
let ts3utils = require('teamspeak3-utils')
let res = ts3utils.parseResponse('error id=0 msg=ok')

if(res instanceof Error) {
  console.log('Error: ' + query.message)
} else {
  console.log(res) // [ { error: '', id: 0, msg: 'ok' } ]
}
```

### Definitions
The TeamSpeak 3 definitions are available in one object. You can use it to set easily your values.

```js
let ts3defs = require('teamspeak3-utils/definitions')

console.log(ts3defs.CODEC_CRYPT_ENABLED) // 2
```

### Retrieve client version/build
Since the version 1.4.0 i have introduced the list of client versions/builds for the `desktop`, `android` and `ios`, you can use it as you wish.

```js
let TS3ClientVersions = require('teamspeak3-utils/client-versions')
```

**Note:** Sometime build can have several versions and version can have several builds, so the methods always return an array

You can easily get the builds for a specified client version with `getClientBuildByVersion`

```js
let ts3utils = require('teamspeak3-utils')
let builds = ts3utils.getClientBuildByVersion('3.0.5', 'desktop')

if(builds instanceof Error) {
  console.log('Error: ' + builds.message)
} else {
  console.log(builds) // [1328254851, 1328791207, 1329129765, 1329301801]
}
```

and get the client versions for a specified build with `getClientVersionByBuild`

```js
let ts3utils = require('teamspeak3-utils')
let versions = ts3utils.getClientBuildByVersion(1427190433, 'android')

if(versions instanceof Error) {
  console.log('Error: ' + versions.message)
} else {
  console.log(versions) // ['3.0.18', '3.0.18.1']
}
```

### Escaping
All the `escape` & `unescape` methods have the same workaround, you provide a string and it returns the final string.

```js
let ts3utils = require('teamspeak3-utils')

console.log(ts3utils.escape('Hello world!')) // Hello\\sworld!
console.log(ts3utils.unescape('Hello\\sworld!')) // Hello world!
```

You can use specifics methods if you need, here are the methods :

- escapeBackslashes / unescapeBackslashes
- escapeBell / unescapeBell
- escapeCarriagesReturns / unescapeCarriagesReturns
- escapeFormfeeds / unescapeFormfeeds
- escapeNewlines / unescapeNewlines
- escapePipes / unescapePipes
- unescapeSlashes / escapeSlashes
- escapeTabulations / unescapeTabulations
- escapeVerticalTabulations / unescapeVerticalTabulations
- escapeWhitespaces / unescapeWhitespaces

## Bugs & suggestions
If you found bug or have any suggestion feel free to open a ticket
