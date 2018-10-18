const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "494565174985097226";
	var channelID = "500412964445356032";

	if (!öneri){
		return message.reply("Bir sunucu Davet Kodu belirtin! Doğru kullanım: **m!öneri <sunucu davet kodu>**");
	} else {

		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Sunucu Tanıtma")
			.addField("Sunucu", öneri)

		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Sunucunuz Tanıtılmıştır! Sunucunuz Burada Tanıtıldı : https://discord.gg/6WFKxTn");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tanıt"],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-tanıt',
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: 'sunucu-tanıt <sunucu davet kodu>'
};
