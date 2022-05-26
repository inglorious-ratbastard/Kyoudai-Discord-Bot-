const ytly = require("ytly");
const getVideoId = require('get-video-id');
var fetchVideoInfo = require('youtube-infofix');

module.exports = {
  name: "lyrics",
  desciption: "yt video lyrics",
   execute(msg, args, Discord){

   if(!args[1]){
     msg.channel.send("Please provide a valid YouTube video link \nThe link provided must be a music video");
     return;
   }  
    (async() =>{
    try {
      const tes = await ytly.get.lyrics(args[1]);
      var string = JSON.stringify(tes).replace(/\\n/g, '\n');
      
     if (string.length >= 1000) { 
      const vid = getVideoId(args[1]);
      
      fetchVideoInfo(vid.id, function (err, 
      videoInfo) {
      const title = videoInfo.title 
      const genre = videoInfo.genre;
      if (err) throw new Error(err);
        
      let chunks = Discord.Util.splitMessage(string);
const embed = new Discord.MessageEmbed()
             .setTitle(`${title}`)
             .setDescription(`${genre}`)
        
      if(chunks.length > 1) {
          chunks.forEach((chunk, i) =>
            msg.channel.send(
              embed
                .setDescription(chunk)
                .setFooter(`Part ${i + 1} / ${chunks.length}`), 
            )         
          );
        } else { 
      msg.channel.send(embed.setDescription(chunks[0]));
   
          }  
              });      
              return;
        }         
      
      msg.channel.send(`${msg.author} Thanks for providing your input. I will have your inquiry results in shortly.`);
      
      const vid = getVideoId(args[1]);
      
      fetchVideoInfo(vid.id, function (err, 
      videoInfo) {
      const title = videoInfo.title
      const genre = videoInfo.genre;
      if (err) throw new Error(err);
                           
      const postLyrics = new Discord.MessageEmbed()
      .setColor('#999999')
      .setTitle(`${title}`)
      .setDescription(`${genre}`)
      .addFields(
        { name: 'Lyrics',
          value: `${string}` 
        })
      msg.channel.send(postLyrics);
      });
      
    } catch (e) {
      msg.channel.send("Sorry but I'm having trouble processing lyrics from this video"); 
      console.log('\nError:', e);
      } 
    })()
    
   }
}
