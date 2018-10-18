const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot Yeniden Başlatılıyor...").then(msg => {
        console.log("Bot Yeniden Başlatılıyor...");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'yeniden-başlat',
  description: 'Botu yeniden başlatır',
  usage: 'yeniden-başlat'
};
