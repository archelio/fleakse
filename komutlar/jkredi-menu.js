const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Snax Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:f1:637967475530530816>| s!banka : Kullanımı : s!banka","Bütün Bilgilerinizi Gösterir")
.addField("<a:f1:637967475530530816>| s!günlük : Kullanım : s!günlük","Günlük Para Verir")
.addField("<a:f1:637967475530530816>| s!kartım : Kullanımı s!kartım", "Kart Bilgilerini Gösterir")
.addField("<a:f1:637967475530530816>| s!kredi : Kullanım : s!kredi ", "Kredi Baya Uzun Yazarak Ögrene Bilirsiniz")
.addField("<a:f1:637967475530530816>| s!şifre : Kullanım : s!şifre 1881 ", "Şifre Alırsib")
.addField("<a:f1:637967475530530816>| s!şirket : Kullanımı : s!şirket (Şirket İsmi) (Sirket Açıklaması)", "Şirket Kurarsın")
.addField("<a:f1:637967475530530816>| s!şirket-ayarlar : Kullanımı s!şirket-ayarlar", "Şirket Ayarlarsın")


return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'ekonomi-menu',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



