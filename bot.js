const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
 
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  console.log("discord.gg/wenzy")
}, 10000);
//lrowsxrd
 
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');//lrowsxrd
const db = require('quick.db');
require('./util/eventLoader')(client);
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');



var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});//lrowsxrd




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });//lrowsxrd
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//lrowsxrd
client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }//lrowsxrd
    });//lrowsxrd
};
//lrowsxrd

//lrowsxrd


client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.on("ready", () => {
   require("./util/dashboard.js")(client)
  })




//goldüye

client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000 //süresini dilediğiniz gibi kısaltabilirsiniz.
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
  var embed = new Discord.RichEmbed()
  .setAuthor(`OwO Gold Üye ${msg.author.username}`,`${msg.author.avatarURL || msg.author.displayAvatarURL}`)
  .setDescription(` ${client.emojis.get("636893538528919572")} **Gold Üye Belirdi**  ${client.emojis.get("636893538528919572")} <@${msg.author.id}>`)
  .setColor("BLUE")
   let y = await msg.channel.send(embed)
   
   y.delete(50000);
      return
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});//lrowsxrd

//////////////////////////////////////////////////////////goldüyebitiş

client.on('guildMemberAdd', member => {
 let guvenlik= db.fetch(`bottemizle_${member.guild.id}`)
    if (!guvenlik) return;
    if(member.user.bot !==true){
    } else {
   member.kick(member) 
  }  
  });//lrowsxrd

//////////////////////////////////////////////////////////

client.on('message', async message => {
  let ke = await db.fetch(`reklam_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let reklam = ["discord.gg/", "https://", ".org", ".com", ".cf", ".tk", ".xyz"]
    if (reklam.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Kurucuya gönderdim!!! Bir daha reklam yapma!")
        message.guild.owner.send("Sunucunuzda bir kişi reklam yaptı. \nKullanıcı: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
    
  }
})


/////////////////////////////////////////////////////////

client.on("message", async msg => {


  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'sa' || 
msg.content.toLowerCase() == 'Selam Naber') {
          try {

                  return msg.reply('Aleyküm Selam')
          } catch(err) {
            console.log(err);
          }
      }//lrowsxrd
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });

////////////////////////////////////////////////////////

client.on("message", msg => {
  let küfürEngel = db.fetch(`ke_${msg.guild.id}`)
  if (!msg.guild) return
  if (küfürEngel === 'kapali') return
    if (küfürEngel === 'acik') {
      const küfür = ["mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (küfür.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(new Discord.RichEmbed().setColor('#000000').setDescription('Olm utanmıyon mu yaşına başına bakmadan küfür etmeye he?! Püü senin sıfatına!')).then(message => message.delete(3000));
    }
}//lrowsxrd
    }
})
////////////////////////////////////////////////////////////
client.on('message', async (msg, member, guild) => {
  let DB = require('quick.db')
  let OtoCevap = await  DB.fetch(`otocevap_${msg.guild.id}`)
  if(OtoCevap === 'açık') {
    
    const OtoCevapSelam = new Discord.RichEmbed()
      .setColor('#000096')
      .setDescription(`**Aleyküm Selam, Hoşgeldin ${msg.author.username}!**`)
    
    if (msg.content.toLowerCase() === 'sa') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'slm') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'selam') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'sea') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'selamun aleyküm') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'selamın aleyküm') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }

    //lrowsxrd
    const OtoCevapHalhatır = new Discord.RichEmbed()
      .setColor('#000096')
      .setDescription(`**İyiyiz, sen nasılsın ${msg.author.username}?**`)
    
    if (msg.content.toLowerCase() === 'naber') {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'nbr') {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'nasılsınız') {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000))
    }

    
    const OtoCevapVeda = new Discord.RichEmbed()
      .setColor('#000096')
      .setDescription(`**Hoşçakal ${msg.author.username}!**`)
    //lrowsxrd
    if (msg.content.toLowerCase() === 'görüşürüz') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }//lrowsxrd
    if (msg.content.toLowerCase() === 'bb') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }//lrowsxrd
    if (msg.content.toLowerCase() === 'bye') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bye bye') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bay') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bay bay') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'baybay') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'güle güle') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    
    if (msg.content.toLowerCase() === `<@${client.user.id}>`) { //Botu etiketleyince mesaj atar
      msg.channel.send('Ha efendim knk')
    }
  
    if (msg.content.toLowerCase() === 'yok bişi') {
      msg.channel.send('LA SEN BENİMLE DALGA MI GEÇİYON')
    }
  }
})

//////////////////reklamisimban
client.on('guildMemberAdd', async member => {
  const reklamisim = ["discord.gg/", "https://discord.gg", "invite", "join", "twitch", "instagram", "facebook", "dlive", "nolive", "discordbots.org", "discordapp"]; 
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`) 
  if (reklamisimban === 'kapali') return; 
  if (reklamisimban === 'acik') { 
   if (reklamisim.some(word => member.user.username.includes(word)) ) { 
      member.ban({ 
          reason: `isminde reklam olduğundan dolayı banlandı.`, 
        }) 
    } 
  } 
//lrowsxrd
});
/////////////////////////linkengelle
client.on("message", async msg => {
let cfxy = await db.fetch(`kufur_${msg.guild.id}`)
if (cfxy == 'Açık') {
  

        const kufur = ["discord.gg","https//",".com",".xyz",".net", ".com.tr", ".glitch.me" , ".org", ".net", ".site", ".co"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            
         const dmihbar = new Discord.RichEmbed()
          .setTitle("Sunucunda " + msg.author.tag + " REKLAM YAPIYOR!")
          .setColor(0x00AE86)
          .setDescription(msg.author + "kullanıcısı " + msg.guild + " sunucusunda reklam yaptı.")
          .addField("Kullanıcının mesajı:", "**" + msg.content + "**")
  
  msg.guild.owner.send(dmihbar)//CodeFENIX
            
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  
     
               
               msg.delete(); 
             

                  return msg.reply('Reklam yapmamalısın dostum!').then(msg => msg.delete(5000));//CodeFENIX
             }
          } catch(err) {
            console.log(err);
          }
        } } else if (cfxy == 'Kapalı') {

}
//lrowsxrd
});    
//////////////////////////////////////////////reklamkivk
client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacakç`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }//lrowsxrd
});
////////////////////////////////

//////////////////////////otobotsilici

client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);//lrowsxrd
  let kanal = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');//lrowsxrd
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627428441695977497/gvnlk-spheli.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627427731407241226/gvnlk-gvnli.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format('dddd');  //lrowsxrd
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627425996454232064/gvnlk-arka.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   if (!kanal) return
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'güvenlik.png');
    kanal.send(attachment)
});

////////////////////güvenlik
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let zaman= db.fetch(`${msg.guild.id}.slowmode`) 
if (zaman === undefined) zaman = 0;
let timeout = zaman
let dakdest = await db.fetch(`slowmodee_${msg.author.id}`);
//lrowsxrd
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
      msg.delete()//lrowsxrd
      msg.channel.send('**Bu kanalda yavaş mod açık mesaj atmadan beklemen gerek!**').then(message => message.delete(2000));
//lrowsxrd
    } else {
          if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
//lrowsxrd
  if (msg.content.length > 0) {
    db.set(`slowmodee_${msg.author.id}`,Date.now())
  }
    }
};       
});
////////////////////////slowmode
client.on('message', message => {
var antiraid = db.fetch(`sunucular.${message.guild.id}.spamkoruma`)
if(!antiraid) return;
if(message.author.bot) return;
message.guild.fetchMember(message.author).then(member => {
if(member.hasPermission('BAN_MEMBERS')) return;
var b = []//lrowsxrd
var aut = []//lrowsxrd
setTimeout(() => {
message.channel.fetchMessages({ limit: 10 }).then(m => {
m.forEach(a => {
if(m.filter(v => v.content === a.content).size > m.size / 2) {
message.guild.fetchMember(m.author).then(member2 => {
if(member2.hasPermission('BAN_MEMBERS')) return;
b.push(a)//lrowsxrd
aut.push(a.author)
})}})
if(!b.includes(":warning: | Saldırgan botlar susturulacak.")) { işlem() }
else {}
  
function işlem() {

if(b.length > 5) {
  message.channel.send(':warning: | Saldırı yapan botlar susturulacak.')
  aut.forEach(a => {
    message.channel.overwritePermissions(a, {
      "SEND_MESSAGES": false
    })
  })
  message.channel.send(client.emojiler.evet + ' | Saldırı yapan botlar susturuldu.')
} else return;
}
})})})})

//otottag
client.on("guildMemberAdd", async member => {
let kontrol = await db.fetch(`ototag_${member.guild.id}`)
if(!kontrol) return
if (member.bot === true) return;

 var sonuc = await db.fetch(`ototag_${member.guild.id}`).replace("-uye-", `${member.user.username}`) 
 member.setNickname(sonuc);//lrowsxrd
 
 })
//////////////ototag
client.on("guildMemberAdd", async member => {//lrowsxrd
let kanal = await db.fetch(`otok_${member.guild.id}`)  //lrowsxrd
let rol = await db.fetch(`otorol_${member.guild.id}`)   //lrowsxrd
let mesaj =  db.fetch(`otomesaj_${member.guild.id}`)  //lrowsxrd
if(!kanal) return//lrowsxrd

if(!mesaj) {
  
  client.channels.get(kanal).send('HG BB SİSTEMİ PİNKDAWN Otomatik Rol Verildi Seninle Beraber `'+member.guild.memberCount+'` Kişiyiz! Hoşgeldin! `'+member.user.username+'`')
member.addRole(rol)
  return
}

if(mesaj) {
  var mesajs = await db.fetch(`otomesaj_${member.guild.id}`).replace("-uye-", `${member.user.tag}`).replace("-rol-", `${member.guild.roles.get(rol).name}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.size}`)
  member.addRole(rol)
  client.channels.get(kanal).send(mesajs)

}  
  
});
////////////////////otorol
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', async () => {
  wait(1000);
  client.guilds.forEach(g => {
    g.fetchInvites()
    .catch(error => { 
        return
    })
    .then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', async member => {
  let davetChannel = await db.fetch(`davetChannel_${member.guild.id}`)
  const giriss = client.emojis.get('632384838749388800')
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];//lrowsxrd
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    //:inbox_tray:
    if (!member.guild.channels.get(davetChannel)) return console.log(`memberLogChannel`)
    else member.guild.channels.get(davetChannel).send(`\`@${member.user.tag}\` adlı kullanıcı sunucuya katıldı! <@${inviter.id}> tarafından sunucuya davet edildi! [**${invite.uses}** davete sahip!]`)
  });
}); 
client.on('ready', async () => {
  wait(1000);
  client.guilds.forEach(g => {
    g.fetchInvites()
    .catch(error => { 
        return
    })
    .then(guildInvites => {
      invites[g.id] = guildInvites;
    });//lrowsxrd
  });
});
//////////////////////davettakip


//korumasistemi

client.on("guildMemberAdd", async member => {
if (db.has(`botkoruma_${member.guild.id}`) === false) return;
if (member.user.bot === false) return;
if (db.has(`botİzinli_${member.id}`) === true) return;

member.kick(member, `Bot koruması aktif!`)

member.guild.owner.send(`Sunucunuza bir bot eklendi ve sunucudan otomatik olarak atıldı, sunucuya eklenmesini onaylıyor iseniz \`s!giriş-izni ${member.id}\``)
})

//korumasistemibitiş

//Sunucuya Eklenim
//eklendimatıldımbitiş


client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });//lrowsxrd

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

const { promisify } = require('util')//lrowsxrd

client.config = require("./config.js")
client.logger = console
client.wait = promisify(setTimeout)
client.ayar = db

String.prototype.toProperCase = function() {
  return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};//lrowsxrd

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};//lrowsxrd

process.on("uncaughtException", (err) => {
  const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
  console.error("Uncaught Exception: ", errorMsg);
  process.exit(1);
});//lrowsxrd

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: ", err);
});//lrowsxrd

client.login(ayarlar.token);


//bototorol
client.on("guildMemberAdd", async member => {
  let rolk = await db.fetch(`rolK_${member.guild.id}`);
  let rolk2 = member.guild.channels.find('id', rolk)
  let rol = await db.fetch(`otorol_${member.guild.id}`);
  let rol2 = member.guild.roles.find('id', rol);
  let botrol = await db.fetch(`bototorol_${member.guild.id}`);
  let botrol2 = member.guild.roles.find('id', botrol);
  if (!rolk) return;
  if (!rolk2) return;
  if (!rol) return;
  if (!rol2) return;
  

    if (!botrol) {
      member.addRole(rol2)
      rolk2.send(`\`${member.user.tag}\` adlı kullanıcıya \`${rol2.name}\` rolü verildi.`)
    }
    if (botrol) {
      if (member.user.bot) {
        member.addRole(botrol2)
        member.removeRole(rol2)
        rolk2.send(` \`${member.user.tag}\` adlı bota \`${botrol2.name}\` rolü verildi.`)
      }
      if (!member.user.bot) {
        member.addRole(rol2)
        rolk2.send(`\`${member.user.tag}\` adlı kullanıcıya \`${rol2.name}\` rolü verildi.`)
      }
    }
});
//sayac
client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})//lrowsxrd
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
   if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
   const embed = new Discord.RichEmbed()
      .setTitle('')
    .setDescription(`${member.user.tag}, Name: PinkDawnaramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı!`)
 .setColor("RANDOM")
    .setFooter("", client.user.avatarURL);
    giriscikiskanali.send(embed);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }//lrowsxrd
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
   const embed = new Discord.RichEmbed()
  
    .setTitle('')
    .setDescription(`${member.user.tag} Adlı Kullanıcı Katıldı. \`${sayac[member.guild.id].sayi}\` Kişi Olmamıza \`${sayac[member.guild.id].sayi - member.guild.memberCount}\` Kişi Kaldı Seninle Beraber\`${member.guild.memberCount}\` Kişiyiz!`)
 .setColor("RANDOM")
    .setFooter("", client.user.avatarURL);
    giriscikiskanali.send(embed)
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }//lrowsxrd
 
});

//seviyesidtemi

client.on("message", async msg => {
  const db = require('quick.db');
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 1) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1  )
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 250) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    //lrowsxrd

    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)
    
  };
 
  if (db.has(`roll_${msg.guild.id}`) === true) {
  if (db.has(`rollss_${msg.guild.id}`) === true) {
    
 var r = db.fetch(`roll_${msg.guild.id}`)
 var s = db.fetch(`rollss_${msg.guild.id}`)
  
  if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == s) {
    if (msg.member.roles.has(msg.guild.roles.get(r).id) === false) {
    msg.channel.send(`<@${msg.author.id}> başarıyla **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`) - 1 || 0}** seviyeyi geçtin ve **${msg.guild.roles.get(r).name}** rolünü aldın!`)
    msg.member.addRole(msg.guild.roles.get(r).id)
    }
  };
}};
  
});//lrowsxrd

//seviyesistemibitis

/////////////resimli gç//////////////
client.on("guildMemberAdd", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;//lrowsxrd
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {
  //lrowsxrd
          const bg = await Jimp.read("https://cdn.discordapp.com/attachments/596076560293953565/613821209880297502/giris_yapt.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(300, 300);
            await bg.composite(userimg, 50, 20).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })
client.on("guildMemberRemove", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {              
           const bg = await Jimp.read("https://cdn.discordapp.com/attachments/596076560293953565/613821573249499177/cksyapt.png");
            const userimg = await Jimp.read(member.user.avatarURL);
          var font;//lrowsxrd
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(300, 300);
            await bg.composite(userimg, 50, 20).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);//lrowsxrd
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              
              }, 10000);//lrowsxrd
        }
    })
///////////////resimli gç bitis////////////////
//ekonomi
client.on('message', message => {
let para = db.fetch(`para_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)
if(para) return//lrowsxrd

  if(!para) {
  db.set(`para_${message.author.id}`, 0)
db.set(`altın_${message.author.id}`, 0)
db.set(`kredi_${message.author.id}`, 1000)
  db.set(`kartsure_${message.author.id}`, Date.now());//lrowsxrd
    return 
  } 
});

////oto
 setTimeout(function(){
    client.users.forEach(kullanici => db.add(`para_${kullanici.id}`, 100))
client.channels.get('642459495053787140').send(client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' Kullanıcının günük maaşı olan **100$** Yatırıldı!')
     }, 600000);
////////////////////.on('message', msg => {
client.on('message', msg => {
if (!msg.content.startsWith(prefix)) {
    return;
  }//lrowsxrd

  });

//ekonomibitis,