define(['require'], (function (require) { 'use strict';

	new Promise(function (resolve, reject) { require(['./generated-dep1'], resolve, reject); }).then(console.log);

}));
