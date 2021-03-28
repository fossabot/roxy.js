// imports / variables
const axios = require('axios').default;
const chalk = require('chalk');

// docs
/**
 * returns group logo url
 * @category group
 * @alias getlogo
 * @returns {} username
 * @param {number} id
 * @example const roxy = require('roxy.js')
 * const username = await roxy.user.getnamefromid(1719166332)
**/

async function getnamefromid(id) {
	const body = await axios.get('https://thumbnails.roblox.com/v1/groups/icons');
	if (!body.status === 200) { throw new Error(`${chalk.bold('roxy.js error:')} user does not exist`); }
	else { return body.data.Username; }
}
module.exports = getnamefromid;
