'use strict';

Promise.resolve().then(() => require('./generated-dep1.js')).then(console.log);
