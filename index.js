/*!
 * is-divisor <https://github.com/MrVyM/is-divisor>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function(num,divisor) {
  if (typeof num === 'number') {
    return num%divisor == 0;
  }
  return False;
};
