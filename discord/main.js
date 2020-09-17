const Discord = require("discord.js");
const client = new Discord.Client();
global.discordJsClient = client;

const config = require("./config.json");
const prefix = "!";

const staff = require("./commands/staff.js");
const adv = require("./commands/advertisers.js");
const booster = require("./commands/users.js");
const allC = require("./commands/all.js");
const test = require("./commands/test.js");

// server commands
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("---------------------------");
});

// users commands
client.on("message", async (msg) => {
  if (msg.content === `${prefix}auth`) {
    await msg.reply("auth comming soon");
  }
});
`${prefix}`;
client.on("message", async (msg) => {
  if (msg.content === `${prefix}update`) {
    await msg.reply("update comming soon");
  }
});

client.on("message", async (msg) => {
  if (msg.content === `${prefix}logs`) {
    await msg.reply("logs comming soon");
  }
});

client.on("message", async (msg) => {
  if (msg.content === `${prefix}b`) {
    const balance = await booster.balance(msg.author);
    await msg.author.send(balance);
  }
});

// staff commands
client.on("message", async (msg) => {
  if (msg.content.startsWith(`${prefix}signup`)) {
    if (msg.member.roles.cache.some((role) => role.name === "admin")) {
      const withoutPrefix = msg.content.slice(prefix.length);
      const split = withoutPrefix.split(/ +/);
      const args = split.slice(1);
      if (args[0]) {
        const userId = await allC.userid(args[0])
        const signUp = await staff.singUp(userId);
        await client.channels.cache.get('756138859707760651').send(signUp);
      }
    } else {
      const user = await allC.noPerm(msg.author);
      await client.channels.cache.get('756138859707760651').send(user);
    }
  }
});

client.on("message", async (msg) => {
  if (msg.content === `${prefix}strike`) {
    await msg.reply("strike comming soon");
  }
});

client.on("message", async (msg) => {
  if (msg.content === `'${prefix}reset`) {
    await msg.reply("rest comming soon");
  }
});

client.on("message", async (msg) => {
  if (msg.content === `${prefix}ban`) {
    await msg.reply("ban comming soon");
  }
});

client.on("message", async (msg) => {
  if (msg.content === `${prefix}unban`) {
    await msg.reply("unban comming soon");
  }
});

// test command
client.on("message", async (msg) => {
  if (msg.content.startsWith(`${prefix}userid`)) {
    const withoutPrefix = msg.content.slice(prefix.length);
    const split = withoutPrefix.split(/ +/);
    const args = split.slice(1);
    if (args[0]) {
      const useridt = await test.userid(args[0]);
      await msg.reply(useridt);
    }
  }
});

// end of bot
console.log("[Discord]", "Logging in...");
client.login(config.bot_token);
