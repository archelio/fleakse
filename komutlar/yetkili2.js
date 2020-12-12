const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Lrows Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("!sayaç-ayarla : Kullanım : ssayaç-ayarla 100 #kanal","Sunucuda 100 Kişi Ulaşınca Belirlediğin Kanalda Görürsün")
.addField("!davet-kanal : Kullanım : !davet-kanal #kanal","Kim Kimi Davet Etini Gösterir")
.addField("!güvenlik : Kullanımı !güvenlik #kanal ", "Kişinin Fake Olup Olmağını Anlarsın")
.addField("!sayaç-sıfırla : Kullanım : !sayaç-sıfırla ", "Sayaç Sıfırlar")
.addField("!güvenlik-sıfırla : Kullanım : !güvenlik-sıfırla ", "Güvenlik Sıfırlar")
.addField("!oto-tag : Kullanımı : !oto-tag ☆ | -uye-", "Sunucu Giren Kişilerin Başlarına Belirlediniz Emoji vb. Şeyi Koyar")
.addField("!oto-tag-sıfırla : Kullanımı s!oto-tag-sıfırla", "Ototag Sıfırlar")
.addField("!gkanal : Kullanımı : !gkanal #kanal","Resimli Giriş Çıkış Ayarlar")


return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'yetkili2',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



