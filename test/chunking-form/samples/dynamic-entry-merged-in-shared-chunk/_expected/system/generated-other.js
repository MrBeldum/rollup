System.register(['./generated-shared.js'], (function () {
	'use strict';
	var sharedExport;
	return {
		setters: [function (module) {
			sharedExport = module.s;
		}],
		execute: (function () {

			console.log('other', sharedExport);

		})
	};
}));
