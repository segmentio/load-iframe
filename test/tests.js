(function () {

    var load   = require('load-iframe'),
        type   = require('component-type'),
        assert = require('component-assert');

    suite('load-iframe');

    test('can load by src string with callback', function (done) {
        load('//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.1/angular.min.js', function (error, event) {
            assert(!error);
            done();
        });
    });

    test('returns the iframe element', function () {
        var iframe = load('//cdnjs.cloudflare.com/ajax/libs/dropbox.js/0.9.0/dropbox.min.js');
        assert(type(iframe) === 'element');
    });

    test('can load protocol-specific src', function (done) {
        var http = 'http://cdnjs.cloudflare.com/ajax/libs/datejs/1.0/date.min.js';
        var https = 'https://cdnjs.cloudflare.com/ajax/libs/datejs/1.0/date.min.js';
        var iframe = load({
            http  : http,
            https : https
        }, function (error, event) {
            assert(!error);
            done();
        });
        assert(iframe.src === http);
    });

}());
