const roxy = require('../../lib/index');
async function test() {
	console.log(await roxy.user.getidfromname('duixrix'));
}
test();