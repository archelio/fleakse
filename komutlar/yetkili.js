const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Lrows Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("!ban : Kullanım : !ban","kimi banlayacagım ")
.addField("!kick : Kullanım : !kick","atacagın ")
.addField("!capslock-engel : Kullanımı !capslock-engel ", "Yazınca Aktif Oluyor Eğer Bir Daha Yazarsan Kapanır")
.addField("!slowmode : Kullanım : !slowmode 3", "Slowmode açar")
.addField("!reklam-kick : Kullanım : !reklam-kick aç", "Yazarsanız 3 Kere Reklam Yapanı Sunucu Atar")
.addField("!küfür-engelle : Kullanım : !küfür-engelle aç", "Küfür engel açar")
.addField("!ayarlar : Kullanım : !ayarlar","Sunucu Yaptınız Ayar Gosterir")
.addField("!prefix : Kullanım : !prefix prefix", "Sunucu için prefix ayarlar")
.addField("!sayaç : Kullanım : !sayaç sayı kanal", "Sayaç ayarlar")
.addField("!oy-kick : Kullanım : !oy-kick @kullanıcı", "Oy yaparak kişiyi atar")
.addField("!oy-ban : Kullanım : !oy-ban @kullanıcı", "Oy yaparak Kişiyi Banlar")
.addField("!reklamtaraması : Kullanım : !reklamtaraması", "Sunucu Rekalam Yapan Gosterir")
.addField("!webpanel : Kullanım : !webpanel ", "Botun Sitesini Yani Kontrol Panel Gosterir")
.addField("s!sunucu-koruma : Kullanım : !koruma-bilgi ", "Burdan Koruma Kodlarını Görebilirsiniz")
.addField("!rolbilgi : Kullanım : !rolbilgi @rol", "Rol Bilgisini Gosterir")
.addField("!bototorol : Kullanimı : !bototoril @rol", " Sunucu Giren Botlara Rol Verir")
.addField("!reklam-engelle : Kullanımı : !reklam-engelle aç", "Sunucudaki Reklamları Engeller")
  

return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'yetkili',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



