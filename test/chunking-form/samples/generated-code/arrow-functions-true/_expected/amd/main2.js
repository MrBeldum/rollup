define(['require'], (function (require) { 'use strict';

	new Promise((resolve, reject) => require(['./generated-dep1'], resolve, reject)).then(console.log);

}));
