var ytdl = require("ytdl-core");
const fs = require('fs');

module.exports = {
  name: "cache",
  desciption: "yt video cache",
   execute(msg, args){

   if(!args[1]){
     msg.channel.send("Please provide a valid YouTube video link");
     return;
   }  
    (async() =>{
    try { 
      ytdl(args[1])
  .pipe(fs.createWriteStream(process.env.DL_TEMP)); 
      
      msg.channel.send(`${msg.author} Thanks for providing your input. I will have your inquiry results in shortly.`);
      
      // const stat = fs.statSync(process.env.DL_TEMP)
      // console.log('\n', stat);
      
    } catch (e) {
      msg.channel.send("Sorry but I'm having trouble processing lyrics from this video"); 
      console.log('\nError:', e);
      } 
    })()
     
   }
}