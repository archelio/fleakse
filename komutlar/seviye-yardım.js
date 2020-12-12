const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Lrows Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField(" !seviye : Kullanım :   !seviye ","Seviye Bakmak İçin Bu Kodu Yaza bilirsin")
.addField(" !seviye renk : Kullanım : !seviye-renk #00ff00","Renk Kodlarına Gore Değiştireilirsiniz")
.addField(" !seviye resim : Kullanımı !seviye resim resimlink ", "Seviyenin Resmini Değiştirir **Sunucuda**")
.addField(" !seviye saydamlaştır : Kullanım : !seviye saydamlaştır 5 ", "Seviye Resim Saydamlaştırır")
.addField(" !seviye ödül : Kullanım : !seviye ödül @rol ", "Sunucunda 100 Level Ulaştığında Ona Otomatik Rol Verir")
.addField(" Uyarı | Botun Rolü En Üste Olması Şart Yoksa Rol Vermez")



return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'seviye-yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



