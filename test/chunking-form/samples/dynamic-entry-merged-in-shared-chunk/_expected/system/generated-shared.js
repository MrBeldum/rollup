System.register([], (function (exports) {
	'use strict';
	return {
		execute: (function () {

			const sharedExport = exports("s", 'shared');

			const dynamicExport = exports("dynamicExport", `dynamic:${sharedExport}`);

		})
	};
}));
