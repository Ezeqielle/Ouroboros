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
    if (msg.content === `${prefix}flex`) {
        await msg.reply('flex comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}logs`) {
        await msg.reply('logs comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}b`) {
        await msg.reply('balance comming soon');
    }
});

// advertisers commands
client.on('message', async msg => {
    if (msg.content === `${prefix}boostd`) {
        await msg.reply('boostd comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}boostr`) {
       await msg.reply('boostr comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}boosth`) {
        await msg.reply('boosth comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}strike`) {
        await msg.reply('strike comming soon');
    }
});

// staff commands
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

client.on('message', async msg => {
    if (msg.content === `${prefix}addsrv`) {
       await msg.reply('addsrv comming soon');
    }
});

client.on('message', async msg => {
    if (msg.content === `${prefix}rmsrv`) {
        await msg.reply('rmsrv comming soon');
    }
});

console.log('[Discord]', 'Logging in...');
client.login(config.bot_token);