# Discord Bot
![Badge](https://img.shields.io/badge/App-DiscordBot-%237159c1?style=for-the-badge&logo=Discord)
### This is a simple bot created to receive commands inside Discord App and interact with users.

### Created with:
 ![Badge](https://img.shields.io/static/v1?label=&message=JavaScript&color=000&style=for-the-badge&logo=javascript)

# Features
- join discord server and turn on the bot
- as a simple app, the user needs to ask for a command through !command_here
- the bot respond to the command given by the discord user

### Get Started

Discord Bot requires [Node.js](https://nodejs.org/) to run.

- before getting started, you need to access [Discord](https://discord.com) website , create an user account, then go to the developer link at the bottom of the page.
- so, you need to create a new application through [Developer Application Portal](https://discord.com/developers/applications) and then create a new bot. Generate your key and after that set the Administration privileges.
-Now you need to create an invite that allows you to add the bot inside a server you're an administrator. All you need to do is click on OAuth2 on the application panelm then select 'bot' to genereate a link you're going to access through your website then you select Administrator on the options bellow.

$ git clone https://github.com/afonsocruz/discord-simple-bot.git
$ npm install or yarn install
- after cloning the repository, create a file called config.json with the settings below:
```sh
{
    "BOT_TOKEN": "TOKEN_HERE"
}
```
Like I said before, this token will be generated automatically inside discord new bot page, and then, just paste it inside TOKEN_HERE.

```sh
$ node index.js
```

License
----

MIT

   [node.js]: <http://nodejs.org>
   [Discord]: <https://discord.com>
   [DiscordDeveloperPortal]: <https://discord.com/developers/applications>
