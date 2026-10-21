'use strict';

Promise.resolve().then(function () { return require('./generated-dynamic.js'); }).then(({dynamic}) => console.log('main1', dynamic));
