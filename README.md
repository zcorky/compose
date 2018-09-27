# Compose

[![NPM version](https://img.shields.io/npm/v/@zcorky/compose.svg?style=flat)](https://www.npmjs.com/package/@zcorky/compose)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/compose.svg?style=flat)](https://coveralls.io/r/zcorky/compose)
[![Dependencies](https://david-dm.org/@zcorky/compose/status.svg)](https://david-dm.org/@zcorky/compose)
[![Build Status](https://travis-ci.com/zcorky/compose.svg?branch=master)](https://travis-ci.com/zcorky/compose)
![license](https://img.shields.io/github/license/zcorky/compose.svg)
[![issues](https://img.shields.io/github/issues/zcorky/compose.svg)](https://github.com/zcorky/compose/issues)

> Compose functions.

### Install

```
$ npm install @zcorky/compose
```

### Usage

```javascript
// import
import compose from '@zcorky/compose';

// filter zero
const filter = data => data.filter(d => d.username === 'zero');

// map salary * 2
const map = data => data.map(d => (d.salary *= 2, d))

const resolve = compose(
  filter,
  map,
);

fetch('/api')
  .then(res => res.json())
  .then(
    resolve,
  );
```

### Relatived
* [compose](https://github.com/component/compose)
* [blog: compose](https://github.com/mqyqingfeng/Blog/issues/26)
