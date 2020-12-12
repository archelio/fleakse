
const Discord = require('discord.js')
const moment = require('moment')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
	let region = {
			"turkey": "Türkiye :flag_tr:",
			"us-central": "Amerika :flag_us:",
			"us-east": "Doğu Amerika :flag_us:",
			"us-south": "Güney Amerika :flag_us:",
			"us-west": "Batı Amerika :flag_us:",
			"eu-west": "Batı Avrupa :flag_eu:",
			"eu-central": "Avrupa :flag_eu:",
			"singapore": "Singapur :flag_sg:",
			"london": "Londra :flag_gb:",
			"japan": "Japonya :flag_jp:",
			"russia": "Rusya :flag_ru:",
			"hongkong": "Hong Kong :flag_hk:",
			"brazil": "Brezilya :flag_br:",
			"singapore": "Singapur :flag_sg:",
			"sydney": "Sidney :flag_au:",
			"southafrica": "Güney Afrika :flag_za:"
	}
	message.guild.dctarihkatilma = moment.utc(message.guild.members.get(message.author.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
	.replace("Monday", `**Pazartesi**`)
	.replace("Tuesday", `**Salı**`)
	.replace("Wednesday", `**Çarşamba**`)
	.replace("Thursday", `**Perşembe**`)
	.replace("Friday", `**Cuma**`)
	.replace("Saturday", `**Cumartesi**`)
	.replace("Sunday", `**Pazar**`)

	.replace("January", `**Ocak**`)
	.replace("February", `**Şubat**`)
	.replace("March", `**Mart**`)
	.replace("April", `**Nisan**`)
	.replace("May", `**Mayıs**`)
	.replace("June", `**Haziran**`)
	.replace("July", `**Temmuz**`)
	.replace("August", `**Ağustos**`)
	.replace("September", `**Eylül**`)
	.replace("October", `**Ekim**`)
	.replace("November", `**Kasım**`)
	.replace("December", `**Aralık**`)

	let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
	}

		
	const embed = new Discord.RichEmbed()
	.setThumbnail(message.guild.icon)
	.setTitle(`**${message.guild.name} Sunucu İstatistikleri**` )
	.setColor("RANDOM")
	//.addField('📛 İsim kısaltması', message.guild.nameAcronym, true)
		.addField('👑 Sunucu Kurucusu', `${message.guild.owner} ` + ' [' + message.guild.ownerID + ']') 
		.addField('🆔 Sunucu ID', message.guild.id)
		.addField('🎯 Sunucu Konumu', region[message.guild.region])
		.addField('📅 Oluşturulma Tarihi', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
	.addField(`👥 Toplam Kişi [${message.guild.memberCount}]\n<a:online:630389054902501387>${message.guild.members.filter(o => o.presence.status === 'online').size} <a:idle:630389047831035936>${message.guild.members.filter(i => i.presence.status === 'idle').size} <a:dnd:630389047013015552>${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size} <a:offline:630389051328954378>${message.guild.members.filter(off => off.presence.status === 'offline').size}<a:offline:630389051328954378>`,'Aşağıda Sunucunun Diğer Öcellikleri Yer Almaktadır.')
		.addField(`📿Emojiler (-emojiler)`, `${message.guild.emojis.size}`, true)
  .addField('🤖 Botlar', `${message.guild.members.filter(m => m.user.bot).size}`, true)
  .addField('🔐 Güvenlik Seviyesi', message.guild.verificationLevel, true)
  .addField('📜 Yazı Kanalları', `${message.guild.channels.filter(c => c.type === "text").size}`, true)
  .addField('🎤 Ses Kanalları',`${message.guild.channels.filter(c => c.type === "voice").size}`, true)
 .addField('🔧 Sistem kanalı', message.guild.systemChannel, true)
  .addField(`🎉 Roller:`, `<@&${message.guild.roles.map(role => `${role.id}`).join('>, <@&')}>`, true)
  .addField('💤 AFK Kanalı', message.guild.afkChannel || 'Bulunmuyor')
  .addField('💤 AFK Zaman Aşımı', `${message.guild.afkTimeout} saniye`)
  .addField(`📥 Sunucu'ya Katılım Tarihi`, message.guild.dctarihkatilma, false)
//  .addField(`Katılım Tarihi (Discord'a)`, message.guild.dctarih, false)
		.setFooter('King, iyi eğlenceler diler!', client.user.avatarURL)
		.setColor("RANDOM")
		.setTimestamp()
message.channel.send({embed})

}


exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sunucu-bilgi', 'sunucubilgi'],
	permLevel: 0,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'sunucubilgi',
	category: 'Kullanıcı',
	description: 'Bulunduğun sunucu hakkında bilgi verir.',
	usage: 'sunucubilgi',
}