// imports / variables
const chalk = require('chalk');
const enmap = require('enmap');
const valCookie = require('./validateCookie');
const options = new enmap('options');

// docs
/**
 * initiates client (logs in and sets cookie)
 * @category client
 * @alias initiate
 * @returns {boolean} true if success / false if failure
 * @example const rojs = require('ro.js')
 * const client = new rojs.client()
 * await client.initiate({cookie: '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_12345678901234567890'})
**/

async function initiate({ cookie }) {
	if (!cookie.toLowerCase().includes('warning:-')) throw new Error(`${chalk.bold('ro.js error:')} no .ROBLOSECURITY warning in cookie`);
	console.log(cookie);
	// if (valCookie(cookie)) {

	// 	return true;
	// }
	// else {
	// 	throw new Error(`${chalk.bold('ro.js error:')} invalid cookie`);
	// }
}

// exports
module.exports = initiate;

