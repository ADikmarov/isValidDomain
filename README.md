# isValidDomainName

A small library that checks the domain name based on a list of domain names

## Installing

```
// with npm
npm install -D is-valid-domain-name

// with pnpm
pnpm install -D is-valid-domain-name

// with yarn
yarn install -D is-valid-domain-name
```

## Usage

```
import { isValidDomain } from 'is-valid-domain-name';

console.log(isValidDomain('com')); // true
console.log(isValidDomain('commmmm')); // false

import { isValidEmail } from 'is-valid-domain-name';

console.log(isValidDomain('support@gmail.com')); // true
console.log(isValidDomain('support@gmail.commmmm')); // false
```

You can also get a list of domain names

```
import { domainList } from 'is-valid-domain-name';

console.log(domainList); // ['aaa', 'aarp', 'abarth', 'abb', 'abbott', 'abbvie', ...]
```
