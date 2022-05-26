const yts = require( 'yt-search' )

module.exports = {
  name: "search",
  desciption: "yt video search",
   execute(msg, args){

   if(!args[1]){
     msg.channel.send("Sorry but the search parameters cannot be left empty \nPlease provide something valid for me to look for..");
     return;
   }  
    (async() =>{
    try { 
      msg.channel.send(`${msg.author} Thanks for providing your input. I will have your inquiry results in shortly.`);
      
      const r = await yts(args.slice(1).join(' '));
      const videos = r.videos.slice(0, 10);

      videos.forEach(function(v) {
      const views = String( v.views ).padStart(1, ' ');
        
      msg.author.send(` ${ views } | ${ v.title } (${ 
      v.timestamp }) | ${ v.author.name } | \n ${v.url}` )
      } )
      
    } catch (e) {
      msg.channel.send("Sorry but I'm having trouble processing your inquiry at this time"); 
      console.log('\nError:', e);
      } 
    })()
     
   }
}