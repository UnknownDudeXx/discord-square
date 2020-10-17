const discord = require('discord.js');
const { Command } = require('@iceprod/discord.js-commando');
const moment = require("moment");

module.exports = class UptimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'uptime',
			group: 'information',
			memberName: 'uptime',
			description: 'tells you uptime of the bot!',
		});
	}

	run(message) {
require("moment-duration-format");
const duration = moment.duration(this.client.uptime).format(`D [days], H [hrs], m [mins], s [secs]`);
  message.reply(`the bot has been up for: ${duration}`);
	}
};
