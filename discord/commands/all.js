// all commands for all
const Discord = require("discord.js");
const client = new Discord.Client();
global.discordJsClient = client;

module.exports.noPerm = async ({ id }) => {
  try {
    const noPermEmbed = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("No Permission")
      .addFields({
        inline: true,
        name: "Error",
        value: "<@" + id + ">" + " you don't have the permission to run this command",
      })
      .setTimestamp()
      .setFooter("boost community");

    return noPermEmbed;
  } catch (error) {
    const noPermEmbed = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("No Permission")
      .addFields({ inline: true, name: "Error", value: error.message })
      .setTimestamp()
      .setFooter("boost community");

    return noPermEmbed;
  }
};

module.exports.userid = async (mention) => {
  try {
    const matches = mention.match(/^<@!?(\d+)>$/);
    if (!matches) throw new Error("Invalid arguments");

    return matches[1];
  } catch (error) {
    const idEmbed = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("User ID")
      .addFields({ inline: true, name: "Error", value: error.message })
      .setTimestamp()
      .setFooter("boost community");

    return idEmbed;
  }
};
