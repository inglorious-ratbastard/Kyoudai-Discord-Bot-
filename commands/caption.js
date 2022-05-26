var ytdl = require("ytdl-core");
const fs = require('fs');
const getVideoId = require('get-video-id');
var getSubtitles = require('youtube-captions-scraper').getSubtitles;

module.exports = {
  name: "caption",
  desciption: "yt video captions",
   execute(msg, args){

   if(!args[1]){
     msg.channel.send("Please provide a valid YouTube video link \nThe link provided must be a music video");
     return;
   }  
     
    (async() =>{
    try {
      ytdl(args[1])
  .pipe(fs.createWriteStream(process.env.DL_CAPT));
      
      msg.channel.send(`${msg.author} Thanks for providing your input. I will have your inquiry results in shortly.`);
      
       const vid = getVideoId(args[1]); 
       getSubtitles({
        videoID: vid.id, 
        lang: 'en'
      }).then(function(captions) {
        console.dir(captions, {'maxArrayLength': null});
      }).catch(function(){
         msg.channel.send("Sorry but I'm having trouble processing captions from this video, Please try again.");
      });

  msg.author.send('Your Captions are available at the following link \nhttps://kyoudai-discord-bot.ingloriousrat.repl.co/caption');
  
    } catch (e) {
      msg.channel.send("Sorry but I'm having trouble processing captions from this video"); 
      console.log('\nError:', e);
      } 
    })()
    
   }
}