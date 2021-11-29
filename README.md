# Proy

A streamlined form validation library

### Quick Start

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
  if (err) return err
})
```

### API

#### Validate

```js

function(source,(err,fields)):void

```

### descriptor

```js

function(descriptor):Proy

```

### Asyncvalidate

### Procude

```js

```
