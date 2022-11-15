# is-divisor

> Returns true if the divisor can divide the number.

## Usage 

```js
const isDivisor = require('is-divisor');
```
See the [tests](./test.js) for more examples.

### True

```js
isDivisor(3,3);
isDivisor(20,10);
isDivisor(20,2);
```

### False

```js
isDivisor(4,0);
isDivisor(2,4);
isDivisor(3,2);
isDivisor('4',2);
isDivisor(null,2);
isDivisor(NaN,1);
```

### Author

**Mr VyM**
* [GitHub Profile](https://github.com/MrVyM)

## Licence

Copyright © 2022, [Mr VyM](https://github.com/MrVyM).
Released under the [MIT License](LICENSE).
