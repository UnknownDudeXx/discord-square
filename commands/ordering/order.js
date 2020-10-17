const discord = require('discord.js');
const { Command } = require('@iceprod/discord.js-commando');
const crypto = require("crypto");

module.exports = class OrderCommand extends Command {
constructor(client) {
   super(client, {
      name: 'order',
   		group: 'ordering',
			memberName: 'order',
			description: 'use this command to order',
      guildOnly: true,
      
 		  args: [
				{
				key: 'text',
 				prompt: 'what is your order?',
					type: 'string',
				},
     	],
					
		});
 	}

run(message, { text }) {
    console.log(message.guild.id)
    if (!message.guild.me.hasPermission('CREATE_INSTANT_INVITE')) {
message.channel.send('I am missing the **CREATE_INSTANT_INVITE** permission.\nPlease give me this permission.');
}
console.log(message.author.id);
	if (message.author.bot) return;
    if(message.author.id === "407188383480152064") return message.reply("you are blacklisted");
    if(message.author.id === "723331582970298449") return message.reply("you are blacklisted");
        if(message.author.id === "703338038511796315") return message.reply("you are blacklisted. this blacklist is NON-appealable.");
        if(message.guild.id === "746854660345954405") return message.reply("this server is blacklisted");
				if(message.guild.id === "746771080298889216") return message.reply("this server is blacklisted");
// HI
      message.channel.createInvite({ unique: true, temporary: true }).then(invite => {
	  console.log(message.channel.id);
	  const id = crypto.randomBytes(5).toString("hex");
	  console.log(id);
 message.reply(`\nalright, your order (${text} is in the kitchen! your order id is ${id}\nif you don't get your order, please reorder`);
   		message.react('🇴'),
		   message.react('🇰')
		   if(message.guild.id === "765353643720572958") return this.client.channels.cache.get(`765353644307513366`).send(`\norder; ${text}\nordered by: ${message.author.tag}\nfrom: https://discord.com/invite/${invite.code}.`);
 return this.client.channels.cache.get(`765337283439886357`).send(`\norder; ${text}\nordered by: ${message.author.tag}\nfrom: https://discord.com/invite/${invite.code}.\norder id: ${id}\n<@&722898122606379069>\nguild id: ${message.guild.id}`);      });
      }
};
