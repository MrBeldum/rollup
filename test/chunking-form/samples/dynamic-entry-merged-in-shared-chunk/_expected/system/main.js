System.register(['./generated-shared.js'], (function (exports, module) {
	'use strict';
	var sharedExport;
	return {
		setters: [function (module) {
			sharedExport = module.s;
		}],
		execute: (function () {

			module.import('./generated-shared.js').then(({ dynamicExport }) => console.log(dynamicExport));
			module.import('./generated-other.js');

			console.log(sharedExport);

		})
	};
}));
