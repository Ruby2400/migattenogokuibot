const Discord = require('discord.js');
const express = require('express');
const app = express();

//début des pramètres heroku

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function(){
	console.log(`> Migatte no gokui bot est actuellement en fonctionnement sur le port ${app.get('port')}`);
})

var bot = new Discord.Client();
var prefix = ("*");

//démarrer Migatte no gokui

bot.on('ready', () => {
	bot.user.setPresence({ game: { name: '*help | Migatte no gokui', type: 0}})
   console.log("> Migatte no gokui bot s'est connecté avec succès !");
});

bot.login('NDg1MjE4MjA0NDAzMjM2ODY0.DmtYJQ.U6MvkrJSvBbf_DFid4PUzWoCxb8');

//aide

bot.on('message', message => {
    if (message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
    	.setColor('#00FFFF')
    	.addField("Commandes de Migatte no gokui :", "*mute @user#0000 | sert à rendre muet 20 minutes un utilisateur.")
      .addField(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", "*ban @user#0000 | sert à bannir un utilisateur.")
      .addField(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", "*tempban @user#0000 | sert à bannir temporairement un utilisateur.")
      .setFooter("(Migatte no gokui by Pyro#1210)")
    message.channel.send(help_embed);
    console.log('> La commande "help" à été effectué');
  }
});

/*

//commandes de sanctions

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}kick`){

//kick

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: Cet utilsateur est introuvable. :x:");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Vous n'avez pas la permission :x:");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Cet utilisateur est impossible à expulser :x:");

    var replys = [
  "#01FEDC",
  "#FFA101",
  "#FE6F01",
  "#FEF601",
  "#6FFE01",
  "#1201FF",
  "#7F01FE",
  "#FE01C3",
  "#0166FE",
  "#0FE177"
]
    let couleur = (replys[Math.floor(Math.random() * replys.length)])
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Un utilisateur a été epulser")
    .setColor(couleur)
    .addField("L'utilisateur expulser :", `${kUser} ID : ${kUser.id}`)
    .addField("Par :", `<@${message.author.id}> ID :  ${message.author.id}`)
    .addField("Dans", message.channel)
    .addField("à", message.createdAt)
    .addField("La raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "sanctions");
    if(!kickChannel) return message.channel.send(":x: Je ne trouve pas le salon 'sanctions' veulliez en créé-un :x:");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

//ban

if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":x: Cet utilsateur est introuvable. :x:");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Vous n'avez pas la permission :x:");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Cet utilisateur est impossible à bannir :x:");

    var replys = [
  "#01FEDC",
  "#FFA101",
  "#FE6F01",
  "#FEF601",
  "#6FFE01",
  "#1201FF",
  "#7F01FE",
  "#FE01C3",
  "#0166FE",
  "#0FE177"
]
    let couleur = (replys[Math.floor(Math.random() * replys.length)])

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Un ban à était fait !")
    .setColor(couleur)
    .addField("L'utilisateur banni :", `${bUser} ID : ${bUser.id}`)
    .addField("Par :", `<@${message.author.id}> ID : ${message.author.id}`)
    .addField("Dans", message.channel)
    .addField("à", message.createdAt)
    .addField("La raison", bReason);

    let sanctionschannel = message.guild.channels.find(`name`, "sanctions");
    if(!sanctionschannel) return message.channel.send(":x: Je ne trouve pas le salon 'sanctions' veulliez en créé-un :x:");

    message.guild.member(bUser).ban(bReason);
    sanctionschannel.send(banEmbed);


    return;
}}) -------------------------------------------------------------

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je n'est pas trouver l'utilisateur !");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'est pas mon roi !");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu est FOU ! Je refuse de kicker cette personne !");

  var replys = [
  "#01FEDC",
  "#FFA101",
  "#FE6F01",
  "#FEF601",
  "#6FFE01",
  "#1201FF",
  "#7F01FE",
  "#FE01C3",
  "#0166FE",
  "#0FE177"
]
  let couleur = (replys[Math.floor(Math.random() * replys.length)])
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Un kick à était fait !")
    .setColor(couleur)
    .addField("L'utilisateur kicker :", `${kUser} Son id est : ${kUser.id}`)
    .addField("Par :", `<@${message.author.id}> Son id est :  ${message.author.id}`)
    .addField("Dans", message.channel)
    .addField("à", message.createdAt)
    .addField("La raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "woomycation");
    if(!kickChannel) return message.channel.send("Je ne trouve pas le chat 'woomycation'");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Je n'est pas trouver l'utilisateur !");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu est pas mon roi !");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu est FOU ! Je refuse de bannir cette personne !");

  var replys = [
  "#01FEDC",
  "#FFA101",
  "#FE6F01",
  "#FEF601",
  "#6FFE01",
  "#1201FF",
  "#7F01FE",
  "#FE01C3",
  "#0166FE",
  "#0FE177"
]
  let couleur = (replys[Math.floor(Math.random() * replys.length)])

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Un ban à était fait !")
    .setColor(couleur)
    .addField("L'utilisateur banni :", `${bUser} Son id est : ${bUser.id}`)
    .addField("Par :", `<@${message.author.id}> Son id est : ${message.author.id}`)
    .addField("Dans", message.channel)
    .addField("à", message.createdAt)
    .addField("La raison", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "woomycation");
    if(!incidentchannel) return message.channel.send("Je ne trouve pas le chat 'woomycation'");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
}}) */
