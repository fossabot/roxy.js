const rojs = require('../lib/index');
const client = new rojs.client();
client.initiate({ cookie: '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_12345678901234567890' });
async function g() {
	console.log(await rojs.user.getnamefromid(1719166332));
}
g();