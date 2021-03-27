const functions = require('../functions').clientFunctions;
const categorys = require('../categorys').categorys;

async function client() {
	this.init = functions.init();
}

exports.client = client;