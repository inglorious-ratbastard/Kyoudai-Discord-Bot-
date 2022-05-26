module.exports = {
  name: "comd",
  desciption: "kyoudai command",
  execute(msg, args){
    msg.channel.send("These are a listing of my commands: \n **combo**: grabs a YT video with lyrics from link \n **caption**: grab a video with captions from YT \n **melic**: gets lyrics from YT music video link \n **keep**: downloads YT video into cache \n **random**: gets random YT music video \n **query**: search YT for your video choice");
  }
}
