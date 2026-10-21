'use strict';

Promise.resolve().then(function () { return require('./generated-dep1.js'); }).then(({ bar }) => console.log(bar()));
