# Proy

A streamlined form validation library , base on `proxy` .

## Install

```bash

$ yarn add proy

$ npm install proy

```

## Usage

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
    console.log(err)
  }
})
```

## API

#### Validate

Pass in the object to be verified . If you want to catch the error, you can also pass in a `callback` function

```js
type ValidateCallBack = (err: [] | CallbackErrors[], fields: Record<string, any>) => void

interface Validate {
  (source:Record<string,any>,callback?ValidateCallBack):Proy
}
```

- `source` : The object to validate (required).

- `callback`: A callback function to invoke when validation completes .The `callback` will return a sync function

- err: A error list
- fields: A list of successfully verified data

### descriptor

- `descriptor` : entry your validate rule

```js
interface Rule {
  type: 'string' | 'number' | 'boolean' | 'array' | 'object';
  required?: boolean;
  message?: string;
  validate?: (val: any) => boolean;
}
```

- `type` Specify the type to be verified
- `required` Is it required
- `message` Custom error message , if you don't set this field , will use default error message
- `validate` Custom check

### Procude

- `produce` will interrupt the chain call.
- `produce` will return successfully verified data , If un verifeid will return empty object .

### LICENSE

[MIT](./LICENSE)
