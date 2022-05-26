const randomUrlGen = require("random-youtube-music-video");

module.exports = {
  name: "random",
  desciption: "yt video selector",
  execute(msg, args){ 

    (async() =>{
    try { 

    msg.channel.send(`${msg.author} Thanks for providing your input. I will have your inquiry results in shortly.`);
      
    const youtubeUrl = 
    await randomUrlGen.getRandomMusicVideoUrl();
    msg.channel.send(youtubeUrl);
    return;  
      
    } catch (e) {
      console.log('\nError:', e);
      } 
    })()
    
  }
} 