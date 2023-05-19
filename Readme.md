# load-iframe [![CI][ci-badge]][ci-link]

Load an iframe by appending an iframe tag to the DOM.

## Installation

```sh
$ npm install load-iframe
$ component install segmentio/load-iframe
```

## Example
    
```js
var load = require('load-iframe');

load('//www.google.com');
```

Loads Google in the iframe.

```js
var load = require('load-iframe');

load({
  http  : 'http://www.google.com',
  https : 'https://ssl.google.com'
});
```

Loads in the right URL depending on the protocol.

## API

### loadIframe(src || options, callback)
Load the given iframe either by passing a `src` string, or
an `options` object:

```js
{
    src: '//example.com', // same as `src` string
    http: 'http://example.com', // `src` to load if the protocol is `http:`
    https: 'https://ssl.example.com' // `src` to load if the protocol is `https:`
}
```

## Publish
Update the Package.json version to version you want to publish and your head/latest commit message should start with "Publish". As soon as your changes merged to master, it will publish the mentioned version.

For Example :- If you want to publish the changes with version "1.0.1".Just make sure that version should not be already published. 
Please Cross check from here https://www.npmjs.com/package/load-iframe?activeTab=versions.

Steps to follow
1. Update Package.json
    "version": "1.0.0"  => "1.0.1"
2. Commit the Changes and Message should be start from "Publish" Like "Publish Changes with version 1.0.1".Otherwise your changes would be Pushed but not Published.
3. Cross verify the version from https://www.npmjs.com/package/load-iframe?activeTab=versions , after PR gets merger to master.

## License

MIT
<!-- 

[ci-link]: https://circleci.com/gh/segmentio/load-iframe
[ci-badge]: https://circleci.com/gh/segmentio/load-iframe.svg?style=svg -->
