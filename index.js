const Discord  = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config();

const app = require('./server');

const PREFIX = "hisao:@:";
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
  console.log("Chew bubblegum and kick some ass!");  
});

bot.on('message', msg => {
  if (msg.author.bot) return;

  if (msg.mentions.members.first() !== undefined){
    if(msg.mentions.members.first().id == process.env.ID){
        msg.channel.send('*To see a list of my commands type **comd** or **help** for further assistance \nAll commands must be preceded by **hisao:@:** in order to operate properly*');
    }
  }

 let args = msg.content.substring(PREFIX.length).split(" ");

  switch(args[0]) {

    case 'comd':
      bot.commands.get('comd').execute(msg, args);
      break; 

    case 'help':
      bot.commands.get('help').execute(msg, args);
      break;   

    case 'combo':
      bot.commands.get('combo').execute(msg, args);
      break;

    case 'caption':
      bot.commands.get('caption').execute(msg, args);
      break; 
      
    case 'melic':
      bot.commands.get('lyrics').execute(msg, args, 
      Discord);
      break; 

    case 'keep':
      bot.commands.get('cache').execute(msg, args);
      break;   

    case 'random':
      bot.commands.get('random').execute(msg, args);
      break;  

    case 'query':
      bot.commands.get('search').execute(msg, args);
      break;   
      
   }

});

bot.on("error", (e) => {
  console.error(e);
  console.log("We're all out of bubblegum..");
  app.close();
  }); 

bot.login(process.env.TOKEN);
