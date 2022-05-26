module.exports = {
  name: "help",
  desciption: "user assistance commands",
  execute(msg, args){
    msg.channel.send("How may I assist you? ");
  }
}