const Discord = require('discord.js');
const client = new Discord.Client();
global.discordJsClient = client;

const config = require('./config.json');
const prefix = '!';

const staff = require('./commands/staff.js');
const adv = require('./commands/advertisers.js');
const booster = require('./commands/users.js');

// server commands
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('---------------------------');
});

// users commands
client.on('message', async msg => {
    if (msg.content === `${prefix}auth`) {
        await msg.reply('auth comming soon');
    }
});
`${prefix}`
client.on('message', async msg => {
    if (msg.content === `${prefix}update`) {
        await msg.reply('update comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}logs`) {
        await msg.reply('logs comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}b`) {
        const balance = await booster.balance(msg.author);
        await msg.author.send(balance);
    }
});


// staff commands
client.on('message', async msg => {
    if (msg.content === `${prefix}signup`) {
        const signUp = await booster.singUp(msg.author);
        await msg.reply(signUp)
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}strike`) {
        await msg.reply('strike comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `'${prefix}reset`) {
        await msg.reply('rest comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}ban`) {
        await msg.reply('ban comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}unban`) {
       await msg.reply('unban comming soon');
    }
});


console.log('[Discord]', 'Logging in...');
client.login(config.bot_token);