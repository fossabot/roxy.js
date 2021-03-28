// imports / variables
const axios = require('axios').default;
const chalk = require('chalk');

// docs
/**
 * returns group logo url
 * @category user
 * @alias getnamefromid
 * @returns {string} username
 * @param {number} id
 * @example const rojs = require('ro.js')
 * const username = await rojs.user.getnamefromid(1719166332)
**/

async function getnamefromid(id) {
	const body = await axios.get('https://thumbnails.roblox.com/v1/groups/icons');
	if (!body.status === 200) { throw new Error(`${chalk.bold('ro.js error:')} user does not exist`); }
	else { return body.data.Username; }
}
module.exports = getnamefromid;
