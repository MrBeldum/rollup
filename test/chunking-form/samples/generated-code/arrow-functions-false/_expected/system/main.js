System.register(['./generated-dep1.js'], (function () {
	'use strict';
	var foo, bar;
	return {
		setters: [function (module) {
			foo = module.f;
			bar = module.bar;
		}],
		execute: (function () {

			console.log(foo, bar);

		})
	};
}));
