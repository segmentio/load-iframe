/**
 * Module dependencies.
 */

var assert = require('assert');
var load = require('..');

/**
 * Tests.
 */

describe('load-iframe', function() {
  it('should load by src string with callback', function(done) {
    load('//example.com/', function (error, event) {
      assert(!error);
      done();
    });
  });

  it('should return the iframe element', function() {
    var iframe = load('//example.com/');
    // Duck type because `is.element` doesn't work correctly on IE < 9
    assert(iframe.nodeType === 1, 'Expected an iframe element');
  });

  it('should load protocol-specific src', function(done) {
    var urls = {
      http: 'http://example.com/',
      https: 'https://example.com/'
    };
    var iframe = load(urls, function (error, event) {
      assert(!error);
      done();
    });
    var protocol = document.location.protocol.replace(':', '');
    assert.equal(iframe.src, urls[protocol]);
  });
});
