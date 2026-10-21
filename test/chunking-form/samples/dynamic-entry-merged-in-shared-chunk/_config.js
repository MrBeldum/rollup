module.exports = defineTest({
	description:
		'exposes dynamic entry exports directly when the entry is merged into a shared chunk (#5409)',
	options: {
		input: 'main.js',
		output: {
			manualChunks: {
				shared: ['shared.js', 'dynamic.js']
			}
		}
	}
});
