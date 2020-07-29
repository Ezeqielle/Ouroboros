const Discord = require('discord.js')
const client = new Discord.Client()
global.discordJsClient = client

const config = require('./config.json')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

console.log('[Discord]', 'Logging in...')
client.login(config.bot_token)