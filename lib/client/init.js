const chalk = require('chalk');

// docs
/**
 * initiates client (logs in and sets cookie)
 * @category client
 * @alias init
 * @param {object} id - The id of the user.
 * @returns {boolean}
 * @example const rojs = require('ro.js')
 * const client = new rojs.client()
 * await client.init({cookie: _|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_12345678901234567890})
**/

async function initiate({ cookie }) {
	if (!cookie.toLowerCase().includes('warning:-')) throw new Error(`${chalk.bold('ro.js error:')} no .ROBLOSECURITY warning in cookie`);
	if (validateCookie()) {
		options.jar.session = args.cookie;
		return true;
	}
	else {
		throw new Error(`${chalk.bold('ro.js error:')} invalid cookie`);
	}
}

// exports
exports.initiate = initiate();

