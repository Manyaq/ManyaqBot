const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `m!atatürk = Rastgele Atatürk Fotoğrafları Atar. \nm!starwars = StarWars Filmini Pixel Formatında Gösterir. \nm!banlandın = Birisine Banlandın! Şakası Yaparsınız. \nm!kahkaha-at = Kahkaha Atarsınız \nm!çay-ısmarla = Herkese Çay Ismarlarsınız. \nm!koş = Koşarsınız.\nm!çay-iç = Çay İçersiniz. \nm!çekiç-at = Etiketlediğiniz Kişiye Çekiç Atarsınız. \nm!osmanlı-tokadı-at = Osmanlı Tokadı Atarsınız. \nm!şanslı-sayım = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**» Kullanıcı Komutları**", `m!report = İstediğiniz Kullanıcıyı Reportlarsınız. \nm!link-kısalt = İstediğiniz Linki Kısaltarak Özelleştirebilirsiniz. \nm!yaz = Bota İsediğinizi Yazdırırsınız. \nm!sunucu-bilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \nm!sunucu-resmi = Bulunduğunuz Sunucunun Resmin Gösterir. \nm!kullanıcı-bilgim = Sizin Hakkınızda Bilgi Verir. \nm!avatarım = Avatarınınızı Gösterir. \nm!hesapla = Yazdığınız İşlemin Sonucu Ekrana Gelir. \nm!oyver İle Oyverirsiniz. \nm!hesapla İle Hesap Makinasını Kullan!`)
  .addField("**» Sunucu Yetkilisi Komutları**", `m!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nm!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nm!unban = İstediğiniz Kişinin Yasağını Açar. \nm!mute = İstediğiniz Kişiyi Susturur. \nm!mesaj-sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \nm!oylama = Oylama Açar. \nm!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", "m!yardım = BOT Komutlarını Atar. \nm!bot-bilgi = BOT Kendisi Hakkında Bilgi Verir. \nm!ping = BOT Gecikme Süresini Söyler. \nm!davet = BOT Davet Linkini Atar. \nm!bot-istatistik = BOT İstatistiklerini Gösterir. \nm!öneri = BOT Yapımcısına Öneride Bulunmanızı Sağlar.")
  .setFooter('Güncel Sürüm [ BETA v0.2.5 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
