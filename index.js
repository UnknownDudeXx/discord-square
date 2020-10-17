const { CommandoClient } = require('@iceprod/discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '++',
	owner: '358042934748381194',
	invite: 'https://discord.gg/2yERsg2',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['information', 'Your First Command Group'],
		['ordering', 'Your Second Command Group'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
	           unknownCommand: false,
	    	help: false,
	})
	.registerCommandsIn(path.join(__dirname, 'commands'));
	
	client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity(`in the kitchen for ${client.guilds.cache.size} servers! `);
});

client.on('error', console.error);

client.login('TOKEN HERE');
