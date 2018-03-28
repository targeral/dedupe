# dedupe
移除数组中重复的值

**Study from seriousManual/dedupe**

## Installation

````bash
$ npm install dedupe
````

## Usage

### primitive types
```javascript
var dedupe = require('dedupe')

var a = [1, 2, 2, 3]
var b = dedupe(a)
console.log(b)

//result: [1, 2, 3]
```

### complex types
Here the string representation of the object is used for comparism. The mechanism is similar to JSON.stringifing but a bit more efficient.
That means that `{}` is considered egal to `{}`. 
```javascript
var dedupe = require('dedupe')

var aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}]
var bb = dedupe(aa)
console.log(bb)

//result: [{a: 2}, {a: 1}]
```

### complex types types with custom hasher
```javascript
var dedupe = require('dedupe')

var aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}]
var bbb = dedupe(aaa, value => value.a)
console.log(bbb)

//result: [{a: 2, b: 1}, {a: 1,b: 2}]
```
