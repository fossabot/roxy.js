// imports / variables
const axios = require('axios').default;
const chalk = require('chalk');

// docs
/**
 * returns id from username
 * @category user
 * @alias getidfromname
 * @returns {number} id
 * @param {string} username
 * @example const rojs = require('ro.js')
 * const userid = await rojs.user.getidfromname('duixrix')
**/

async function getidfromname(username) {
	const body = await axios.get(`https://api.roblox.com/users/get-by-username?username=${username}`);
	const id = body.data.Id;
	const errorMessage = body.data.errorMessage;
	const message = body.data.message;
	if (id) { return id; }
	else if (errorMessage || message) { throw new Error(`${chalk.bold('ro.js error:')} ${errorMessage || message}`); }
}
module.exports = getidfromname;
