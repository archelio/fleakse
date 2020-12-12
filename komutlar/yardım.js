const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Lrows Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("| !eglence |","Eğlence Komut Görebilirsiniz")
.addField("| !seviye-yardım |","Seviye Kodlarını Gösterir")
.addField("| !yetkili |","Yetkili Komutlarını Görebilirsiniz ")
.addField("| !yetkili2|","Yetkili Komutlarını Gösterir")
.addField("| !sunucu-koruma ", "Sunucunuz Korumak İçin Kodları Gosterir")



return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



