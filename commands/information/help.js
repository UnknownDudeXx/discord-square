const { Command } = require('@iceprod/discord.js-commando');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			group: 'information',
			memberName: 'help',
			description: 'tells you how to use bot, etc!!',
		});
	}

	run(message) {
    const exampleEmbed = {
    color: 935300,
    title: 'Invite me to your server!',
    url: 'https://discord.com/oauth2/authorize?client_id=CLIENT ID HERE&scope=bot&permissions=PERMISSIONS HERE',
    author: {
        name: 'Click me to join the support server!',
        icon_url: 'IMAGE LINK HERE',
        url: 'https://discord.gg/LINK HERE',
    },
    description: 'here is the command help for BOT NAME HERE!',
    thumbnail: {
        url: 'IMAGE LINK HERE',
    },
    fields: [
        {
            name: 'commands:',
            value: 'commands are sorted by categories! :slight_smile:',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'ordering',
            value: '``order``',
            inline: true,
        },
        {
            name: ':information_source: informative',
            value: '``uptime`` ``help``',
            inline: true,
        },
    ],
    image: {
        url: 'PUT IMAGE LINK HERE',
    },
    timestamp: new Date(),
    footer: {
        text: 'made by USERNAME HERE#TAG HERE',
        icon_url: 'PUT IMAGE LINK HERE',
    },
};

message.channel.send({ embed: exampleEmbed });
	}
};
