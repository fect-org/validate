# Proy

A streamlined form validation library

### Quick Start

```bash

$ yarn add proy

$ npm install proy

```

### Usage

```js
import { proy } from 'proy'

const descriptor = {
  name: {
    type: 'string',
    required: true,
    validator: (rule, val) => val === 'kanno',
  },
}

const basic = proy(descriptor)

basic.validate({ name: 'XeryYue' }, (err, fields) => {
  if (err) {
    errHandelr(err)
  }
})
```

### API

#### Validate

```js

function(source,(err,fields)):void

```

- `source` : The object to validate (required).

- `callback`: A callback function to invoke when validation completes .The `callback` will return a sync function

- err: A error list
- fields: A list of successfully verified data

### descriptor

```js

function(descriptor):Proy

```

- `descriptor` : entry your validate rule

```js
interface Rule {
  type: 'string' | 'number' | 'boolean' | 'array' | 'object';
  required?: boolean;
  validate?: (val: any) => boolean;
}
```

### Procude

- `produce` will interrupt the chain call.
- `produce` will return successfully verified data , If un verifeid will return empty object .

### LICENSE

[MIT](./LICENSE)
