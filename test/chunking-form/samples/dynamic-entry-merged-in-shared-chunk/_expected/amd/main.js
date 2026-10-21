define(['require', './generated-shared'], (function (require, shared) { 'use strict';

	new Promise(function (resolve, reject) { require(['./generated-shared'], resolve, reject); }).then(({ dynamicExport }) => console.log(dynamicExport));
	new Promise(function (resolve, reject) { require(['./generated-other'], resolve, reject); });

	console.log(shared.sharedExport);

}));
