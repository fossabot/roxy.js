const chalk = require('chalk');
const figlet = require('figlet');

console.log(chalk.yellow(figlet.textSync('ro.js', {
	font: 'Big',
	horizontalLayout: 'default',
	verticalLayout: 'default',
})));

console.log(`
${chalk.underline('ro.js installed <3')}
${chalk.bold('docs:')} https://ro.js.org/ 
${chalk.bold('GitHub:')} https://github.com/coleiscoolig/ro.js
${chalk.bold('Support:')} https://discord.gg/WK2qTecTkJ
${chalk.bold.red('be aware that roblox silently changes their endpoints frequently. https://devforum.roblox.com/t/introduce-change-logs-to-roblox-api-endpoints/524783')}
`);