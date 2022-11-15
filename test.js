/*!
 * is-number <https://github.com/MrVyM/is-divisor>
 *
 * Copyright (c) 2022, Mr VyM.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var isDivisor = require('./');

describe('is a number', function() {
  var fixtures = [
    0xff,
    5e3,
    0,
    0.1,
  ];

  fixtures.forEach(function(num, idx) {
    it(JSON.stringify(num) + ' should be a divisor', function() {
      assert(isDivisor(num,num), 'expected "' + String(num) + '" to be a divisor');
    });
  });
});
