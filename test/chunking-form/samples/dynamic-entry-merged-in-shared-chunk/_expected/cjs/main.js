'use strict';

var shared = require('./generated-shared.js');

Promise.resolve().then(function () { return require('./generated-shared.js'); }).then(({ dynamicExport }) => console.log(dynamicExport));
Promise.resolve().then(function () { return require('./generated-other.js'); });

console.log(shared.sharedExport);
