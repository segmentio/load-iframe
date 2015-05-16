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

## License

MIT


[ci-link]: https://circleci.com/gh/segmentio/load-iframe
[ci-badge]: https://circleci.com/gh/segmentio/load-iframe.svg?style=svg
