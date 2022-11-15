/*!
 * is-divisor <https://github.com/MrVyM/is-divisor>
 *
 * Copyright (c) 2022-present, Mr VyM.
 * Released under the MIT License.
 */

'use strict';

module.exports = function(num,divisor) {
  if (typeof num === 'number') {
    return num%divisor == 0;
  }
  return False;
};
