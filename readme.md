## Kyoudai Discord Bot
#### Kyoudai Bot 兄弟 | Discord Kyoudai [Brothers] Bot
___
##### **About:**
**Kyoudai Discord Bot** is designed to work in tandem with media bots in Discord servers, providing karaoke-like functionality including capturing videos with lyrics or subtitles, display of capture with scrolling text, along with built-in search and random video selection options. 

##### **Kyoudai Bot Features:**
* Retrieve Music Video and Lyrics
* Retrieve Video with Captions
* Video Search and Random Video Options
* Cache of Video Services 
* Display saved items on local hosted webpage
* Persistent Internally Hosted Server
---
##### **Commands:**
Guild members can use the `@Hisao` command to initilize a response from the bot. All commands must include the `hisao:@:` prefix followed by the command you wish to use. If you would like a complete listing of this bots commands use the `hisao:@:comd` command to invoke the list.
___
##### **Express Server and Live Hosting:**
This bot is built with a Node-Express backend server for the purpose of persistent hosting. This simple server is pinged by [UptimeRobot](https://uptimerobot.com) at a preset interval thus allowing the bot to remain active even during your host site's activity timeout settings. 
*The server will run on a default `PORT` unless specified otherwise.*
___
##### **How to Install and Run:**
1. Clone the repository
`git clone` 
2. Install the dependencies
`npm install` 
3. Create environment file and set bot credentials
 add `.env` file to your project folder
4. Run the Bot (also starts the Express server)
`npm index`
5. How to Run the Server (standalone version)
`npm server`

*The bot `TOKEN`, `ID` number, and Server `PORT` number must be properly configured within your own global enviroment `.env` file otherwise it will not work.*

*Next, create a `downloads` folder within the main file structure along with a `temporary` folder inside of it. Appropriate links to these folders must be customized as `DL_MAIN`, `DL_TEMP` and `DL_CAPT` keys within the `.env` file as well.*
___
##### **Reporting Bugs or Issues:**
If you would like to report a **Bug** or **Issue** in this project feel free to do so under the **Issues** tab or contact me directly about any major concerns. Ideas for new features are also welcomed. Please address these by matters by sending a **Pull Request** as they will be reviewed for consideration. 
___
##### **Source and License:**
**Kyoudai Discord Bot** was created by [Javier Yzaguirre](https://github.com/inglorious-ratbastard) and is considered free and open source to use as reference for those wanting to create their own bot or would contribute to this project. 
___
##### **External Resources:**
[DiscordJS](https://discord.js.org/#/docs/discord.js/stable/general/welcome)<br>
[Discord Developer Portal](https://discord.com/developers/docs/intro)<br>
[Repl.it](https://repl.it/)   
[UptimeRobot](https://uptimerobot.com/)  