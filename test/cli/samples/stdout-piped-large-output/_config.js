const assert = require('node:assert');
const { execFileSync } = require('node:child_process');
const { unlinkSync, writeFileSync } = require('node:fs');
const path = require('node:path');

const rollupBinary = path.resolve(__dirname, '../../../../dist/bin/rollup');
// Large enough that the bundle exceeds the OS pipe buffer by far
const EXPORT_COUNT = 20000;

let expectedOutput;

module.exports = defineTest({
	description:
		'writes the complete bundle to stdout when piping large output with --forceExit (#5097)',
	skipIfWindows: true,
	spawnArgs: ['-i', 'main.js', '-f', 'es', '--silent', '--forceExit'],
	before() {
		let input = '';
		for (let index = 0; index < EXPORT_COUNT; index++) {
			input += `export const value${index} = "value-number-${index}-with-padding-0123456789";\n`;
		}
		writeFileSync(path.resolve(__dirname, 'main.js'), input);
		// Reference output from a run without --forceExit, which cannot truncate
		expectedOutput = execFileSync('node', [rollupBinary, '-i', 'main.js', '-f', 'es', '--silent'], {
			cwd: __dirname,
			encoding: 'utf8',
			maxBuffer: 64 * 1024 * 1024
		});
	},
	after() {
		unlinkSync(path.resolve(__dirname, 'main.js'));
	},
	result(stdout) {
		assert.ok(
			expectedOutput.length > 1024 * 1024,
			`test setup failed: reference output is only ${expectedOutput.length} bytes`
		);
		assert.equal(
			stdout.length,
			expectedOutput.length,
			`piped stdout was truncated: received ${stdout.length} of ${expectedOutput.length} bytes`
		);
		assert.equal(stdout, expectedOutput);
	}
});
