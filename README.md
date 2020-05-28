# object or array filter null

Traversal loop filtering `null` `undefined` `''` `[]` `{}` in object or array.

## Install

```bash
# npm
npm i object-filter-null
# yarn
yarn add object-filter-null
```

## Usage

```js
// node
const filterNull = require('object-filter-null')
// es6
import filterNull from 'object-filter-null'

filterNull({
  a: 1,
  b: null,
  c: {
    ca: 1,
    cb: '',
    cc: NaN,
    cd: ['', false, null, undefined]
  },
  d: null,
  e: ''
})
//=> { a: 1, c: { ca: 1, cc: NaN, cd: [ false ] } }

filterNull([[],{},[[],[]]])
//=> []

filterNull({a: {}, b:{ba: {}}})
//=> {}
```

## Api

filterNull(target)

### target
Type: `Object` or `Array`

### returns
Same as target (`Object` or `Array`)

## License
MIT

Give me a star, Thanks
