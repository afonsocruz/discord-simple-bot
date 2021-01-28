const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client;

// adding a prefix to bot a command
const prefix = "!";

client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLocaleLowerCase();

    if (command == "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message took ${timeTaken}ms.`);
    } else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`the sum is: ${sum}!`);
    } else if (command === 'commands') {
        message.reply("The commands are são: !ping and !sum")
    }
});

client.login(config.BOT_TOKEN);