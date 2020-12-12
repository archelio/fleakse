const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Lrows Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField(" adamol : !Kullanım : adamol","Seni Profil Fotograf Resme Koyar ")
.addField(" balıktut : !Kullanım : balıktut","Balık Tutarsın")
.addField(" kralol : !Kullanımı kralol ", "Gif Atar")
.addField(" yılbaşı : Kullanım : !yılbaşı", "Yıl Başına Kaç Gün Kaldını Gosterir")
.addField(" atasözü : Kullanım : !atasözü", "Atasöz Atar")
.addField(" sayı-tahmin : Kullanım : !sayı-tahmin", "Sayı Tahmini Bot Sayı Tutar Sizde Bilme Çalışırsınız")
.addField(" şifre : Kullanım : !şifre 10","Bir Sayı Uzunlu Girersin Ve O Sana Güvenli Şifre Oluşturur")
.addField(" hangi-hayvansın : Kullanım : !hangi-hayvansın", "Hangi Hayvan Oldunu Gosterir **Şaka Amaçlıdır**")
.addField(" s!emojiyazı : Kullanım :emojiyazı Lrows", "Emoji Yazı Oluşturur")

return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'eglence',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



