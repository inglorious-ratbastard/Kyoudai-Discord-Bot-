var ytdl = require("ytdl-core");
const fs = require('fs');
const ytly = require("ytly");

module.exports = {
  name: "combo",
  desciption: "yt media merge",
   execute(msg, args){

   if(!args[1]){
     msg.channel.send("Please provide a valid YouTube music video link");
     return;
   }  
    (async() =>{
    try { 
      ytdl(args[1])
        
  .pipe(fs.createWriteStream(process.env.DL_MAIN));
      const tes = await ytly.get.lyrics(args[1]);
      var string = JSON.stringify(tes).replace(/\\n/g, '\n');
      
      msg.channel.send(`${msg.author} Thanks for providing your input. I will have your inquiry results in shortly.`);
      console.log("\n" + string);
      
      msg.author.send('Your Combo is available at the following link \nhttps://kyoudai-discord-bot.ingloriousrat.repl.co/combo');
      
    } catch (e) {
      msg.channel.send("Sorry but I'm having trouble processing lyrics from this video"); 
      console.log('\nError:', e);
      } 
    })()
     
   }
}