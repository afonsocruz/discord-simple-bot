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
        message.reply(`Pong! Esta mensagem teve uma latência de ${timeTaken}ms.`);
    } else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`A soma é: ${sum}!`);
    } else if (command === 'comandos') {
        message.reply("Os comandos são: !ping e !sum")
    } else if (command === "zaradu") {
        message.reply("Esse é otário!")
    } else if (command === "pao") {
        message.reply("Fracassou na vida toda, burrão!");
    } else if (command === "high") {
        message.reply("famoso traficante de petrópolis");
    } else if (command === "malu") {
        message.reply("a esperança desse lugar de fracassados");
    } else if (command === "azeitona") {
        message.reply("isso é fofoca, BDRRRRRRRR");
    } else if (command === "isa") {
        message.reply("pança")
    }
});

client.login(config.BOT_TOKEN);