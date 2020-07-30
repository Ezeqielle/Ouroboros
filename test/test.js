const Discord = require('discord.js');
const client = new Discord.Client();
global.discordJsClient = client;

const config = require('./config.json');
const prefix = '!';

// server commands
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('---------------------------');
});

client.on('message', async msg => {
    if (msg.content === `${prefix}user`) {
        await msg.channel.send(`user id : ${msg.author.id}`);       // recup l'id de la personne qui a send le msg
        await msg.channel.send(`user tag : <@${msg.author.id}>`);   // @user.id pour poke l'user
        await msg.author.send('test de dm');                 // envoye un dm a celui qui a fait la commande

    }
});


console.log('[Discord_test]', 'Logging in...');
client.login(config.bot_token);