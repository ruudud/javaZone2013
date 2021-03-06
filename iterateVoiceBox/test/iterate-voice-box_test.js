'use strict';

var iterate_voice_box = require('../lib/iterate-voice-box.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/


exports['Tests the iterate voice box implementation'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    // tests here
    test.expect(1);
    test.ok(iterate_voice_box.listen, "listen should be defined");
    test.done();
  }
};
