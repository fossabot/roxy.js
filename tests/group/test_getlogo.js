const roxy = require('../../lib/index');
async function test() {
	console.log(await roxy.group.getlogo(544545545445, 150, true));
}
test();