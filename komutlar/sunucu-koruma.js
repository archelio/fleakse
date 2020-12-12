const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Lrows Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField(" Koruma Menusu |","Merheba Sunucun Çokmu Saldırı Oluyor Bundan Kurtulmak İçin Koruma Sistem Aktif Edersin")
.addField(" !sunucu-koruma |","Bu Kod Yetkileriniz Gizlice Bot Ekleyip Sunucu Kötü Amaçlı Şeyler Yapmak İstiyor Diye Var Chat Yazarak Kullanım Görebilirsin")
.addField(" !giriş-izni |","Sunucu Bot Eklemeye Çalışan Yetkiler Ekleyemez Sizin İzin Vermeniz Gerek")
.addField(" Koruma Menusu |","Botumuz Bu Kadar Koruma Sağlıyor Şuana Kadar")

return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'sunucu-koruma',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



