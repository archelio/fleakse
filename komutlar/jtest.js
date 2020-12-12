const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let para = db.delete(`para_${message.author.id}`)
  db.delete(`altın_${message.author.id}`)
db.delete(`şirket_${message.author.id}`)
db.delete(`kredi_${message.author.id}`)  
db.delete(`şirketamac_${message.author.id}`)
db.delete(`şirketdeger_${message.author.id}`)
  message.channel.send('test girişimi başarılı!')
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['t'], 
  permLevel: 4 
};

exports.help = {
  name: 'test', 
  description: 'taslak', 
  usage: 'test'
};
