const roxy = require('../../lib/index');
async function test() {
	console.log(await roxy.user.getnamefromid(1719166332));
}
test();